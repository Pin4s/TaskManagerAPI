import { AppError } from "@/utils/AppError";
import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message })
    }

    if (error instanceof ZodError) {
        return res.status(400).json({
            message: "Validation failed",
            issues: error.errors
        })
    }

    return res.status(500).json({ message: error.message })
}
