// import { PrismaClient } from "@prisma/client";
import { bankPrisma } from "../../prisma/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const {sign} = jwt;
// const prisma = new bankPrisma()

export async function registerService(email: string, password: string){
    const hashed = await bcrypt.hash(password, 10);
    return bankPrisma.user.create({
        data: {
            email, password: hashed
        }
    })
}

export async function loginService(email: string, password: string){
    const user = await bankPrisma.user.findUnique({
        where:{email: email}        
    })
    if (!user) throw new Error("User Not found");
    const valid = await bcrypt.compare(password, user.password);
    if(!valid) throw new Error("Invalid Password");
    const token = jwt.sign({
        id: user.id
    }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    });
    return {token}
}
