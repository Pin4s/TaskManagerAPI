import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError";
import { prisma } from "@/database/prisma";
import z, { string } from "zod";

class TeamsAdministrationController {
    create(req: Request, res: Response, next: NextFunction) {
        const bodySchema = z.object({
            name: z.string().min(3).max(100),
            description: z.string().optional(),
            members: z.array(string().uuid()),
        })

        const { name, description, members } = bodySchema.parse(req.body)

        

        return res.json({ message: "ok" })
    }
}

export { TeamsAdministrationController }