import connection from "../config/db.js";

async function GetUserByEmail(email) {

    return await connection.query(`SELECT * FROM "users" WHERE "email"=$1`, [email]);
}

async function CreateUser(name, email, password) {

    return await connection.query(`INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`, [name, email, password]);
}

const userRepository = {
    GetUserByEmail,
    CreateUser
};

export default userRepository;