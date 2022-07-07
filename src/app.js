import bcrypt from "bcrypt";
import cors from "cors";
import express from "express";
import jwt from "jsonwebtoken";
import connection from "./config/db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/financial-events", async (req, res) => {
  
});

app.get("/financial-events", async (req, res) => {
  
});

app.get("/financial-events/sum", async (req, res) => {

});

export default app;
