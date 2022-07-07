import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import userRepository from '../repositories/userRepository.js';
import '../config/setup.js';

export async function PostSingupController(req, res) {

    const { name, email, password } = req.body;
    try {

        if (!name || !email || !password) return res.sendStatus(422);

        const existingUsers = await userRepository.GetUserByEmail(email);
        if (existingUsers.rowCount > 0) return res.sendStatus(409);

        const hashedPassword = bcrypt.hashSync(password, 12);
        await userRepository.CreateUser(name, email, hashedPassword);
        res.sendStatus(201);

    } catch (err) { return res.status(500).send(err) }

}

export async function PostSinginController(req, res) {

    const { email, password } = req.body;
    try {

        if (!email || !password) return res.sendStatus(422);

        const { rows } = await userRepository.GetUserByEmail(email);
        const [user] = rows;

        if (!user || !bcrypt.compareSync(password, user.password)) return res.sendStatus(401);

        const token = jwt.sign({ id: user.id, }, process.env.JWT_SECRET);
        res.send({ token });

    } catch (err) { return res.status(500).send(err) }
}