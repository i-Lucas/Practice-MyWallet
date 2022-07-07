import connection from "../config/db.js";

async function NewEvent(id, value, type) {

    return await connection.query(
        `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
        [id, value, type]
    );
}

async function UserEvents(id) {

    return await connection.query(
        `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`, [id]);
}

const financialRepo = {
    NewEvent,
    UserEvents
};

export default financialRepo;