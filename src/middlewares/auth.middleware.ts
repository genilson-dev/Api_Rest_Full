import type { Request, Response, NextFunction } from "express";
import type { TokenPayLoad } from "../interfaces/PayLoad.js";

import jwt from "jsonwebtoken";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token não encontrado" });
  }

  const [, token] = authHeader.split(" ");

  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    return res.status(500).json({
      error: "JWT_SECRET não configurado",
    });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret) as unknown as TokenPayLoad;
    req.userId = decoded.id;
    next();
  } catch {
    return res.status(401).json({
      error: "Token inválido",
    });
  }
}
