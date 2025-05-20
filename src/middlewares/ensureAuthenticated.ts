import { Request, Response, NextFunction } from "express";
import { authConfig } from "@/configs/auth";
import { AppError } from "@/utils/AppError";
import { verify } from "jsonwebtoken";

interface TokenPayload {
    role: string
    sub: string
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader) {
            throw new AppError("Invalid JWT Token")
        }

        const [, token] = authHeader.split(" ")

        const { sub: user_id, role } = verify(token, authConfig.jwt.secret) as TokenPayload

        req.user = {
            id: user_id,
            role: role
        }


        return next()
    } catch (error) {
        throw new AppError("Invalid JWT Token", 401)
    }
}