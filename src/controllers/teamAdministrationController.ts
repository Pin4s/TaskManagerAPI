import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError";
import { prisma } from "@/database/prisma";
import z, { string } from "zod";

class TeamsAdministrationController {
    async create(req: Request, res: Response, next: NextFunction) {
        const bodySchema = z.object({
            name: z.string().min(3).max(100),
            description: z.string().optional(),
            members: z.array(string().uuid()),
        })

        const { name, description, members } = bodySchema.parse(req.body)

        const existTeam = await prisma.teams.findFirst({ where: { name } })

        if (existTeam) {
            throw new AppError("This team has already exist!", 401)
        }

        const team = await prisma.teams.create({
            data: {
                name,
                description,
                members: {
                    create: members.map(userId => ({
                        user: {
                            connect: { id: userId }
                        }
                    }))
                }
            }
        })


        return res.json({ team })
    }
}

export { TeamsAdministrationController }