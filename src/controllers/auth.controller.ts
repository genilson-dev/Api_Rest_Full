import type { Request, Response } from "express";
import {registerService} from "../services/user/auth.service.js";

export async function register(req: Request, res: Response){
    try {
        const {email, password} = req.body;
        const user = await registerService(email, password);
        return res.status(200).json({user})
    } catch (error: any) {
        res.status(401).json({
            error: error.message
        })
    }
}
