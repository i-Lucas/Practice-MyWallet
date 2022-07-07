import pg from "pg";
import "./setup.js";

const { Pool } = pg;

const config = {
    connectionString: process.env.DATABASE_URL
}
/*
if (process.env.MODE === "PROD") {
    config.ssl = {
        rejectUnauthorized: false
    }
}
*/
const connection = new Pool(config);

connection.query("SELECT NOW()", (err, res) => {

    if (res) { console.log(`connected to database at ${res.rows[0].now}`); }
    else { console.log('failed to connect to database'); }
})

export default connection;