import type { Request, Response } from "express";
import {createBookService} from "../../services/book/book.service.js";

export async function createBookController(req: Request, res: Response){
    try {
        const book = await createBookService(req.userId, req.body); 
        res.status(201).json({book});

    } catch (error: any) {
        res.status(400).json({
            error: error.message
        })        
    }
}

