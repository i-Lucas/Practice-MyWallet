import connection from '../config/db.js';
import '../config/setup.js';

export async function PostFinancialEventsController(req, res) {

    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");

    try {

        if (!token) return res.sendStatus(401);
        let user;

        try {
            user = jwt.verify(token, process.env.JWT_SECRET);
        } catch {
            return res.sendStatus(401);
        }

        const { value, type } = req.body;

        if (!value || !type) return res.sendStatus(422);

        const financialTypes = ["INCOME", "OUTCOME"];
        if (!financialTypes.includes(type)) return res.sendStatus(422);

        if (value < 0) return res.sendStatus(422);

        await connection.query(
            `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
            [user.id, value, type]
        );

        res.sendStatus(201);

    } catch (err) { return res.status(500).send(err); }
}

export async function GetFinancialEventsController(req, res) {

    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");

    try {

        if (!token) return res.sendStatus(401);

        let user;

        try {
            user = jwt.verify(token, process.env.JWT_SECRET);
        } catch {
            return res.sendStatus(401);
        }

        const events = await connection.query(
            `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
            [user.id]
        );

        res.send(events.rows);

    } catch (err) { return res.status(500).send(err); }
}

export async function GetFinancialEventsSumController(req, res) {

    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");

    try {

        if (!token) return res.sendStatus(401);

        let user;

        try {
            user = jwt.verify(token, process.env.JWT_SECRET);
        } catch {
            return res.sendStatus(401);
        }

        const events = await connection.query(
            `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
            [user.id]
        );

        const sum = events.rows.reduce(
            (total, event) =>
                event.type === "INCOME" ? total + event.value : total - event.value,
            0
        );

        res.send({ sum });

    } catch (err) { return res.status(500).send(err); }
}