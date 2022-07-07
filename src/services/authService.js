import jwt from "jsonwebtoken";

export async function verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
};