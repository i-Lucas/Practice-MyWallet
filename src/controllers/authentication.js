import * as authService from "../services/authService.js";

export async function PostSingupController(req, res) {

    try {

        const { name, email, password } = req.body;
        if (!name || !email || !password) return res.sendStatus(422);

        await authService.signUp({ name, email, password });
        res.sendStatus(201);

    } catch (err) { return res.status(500).send(err) }
}

export async function PostSinginController(req, res) {

    try {

        const { email, password } = req.body;
        if (!email || !password) return res.sendStatus(422);

        const token = await authService.signIn({ email, password });
        res.send(token);

    } catch (err) { return res.status(500).send(err) }
}