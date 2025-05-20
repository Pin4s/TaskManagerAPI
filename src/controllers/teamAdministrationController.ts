import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError";
import { prisma } from "@/database/prisma";
import z from "zod";

class TeamsAdministrationController {
    create(req: Request, res: Response, next: NextFunction) {
        return res.json({ message: "ok" })
    }
}

export { TeamsAdministrationController }