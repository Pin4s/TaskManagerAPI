import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError";
import { prisma } from "@/database/prisma";
import z, { optional, string } from "zod";

class TeamsAdministrationController {
    async create(req: Request, res: Response, next: NextFunction) {
        const bodySchema = z.object({
            name: z.string().min(3).max(100),
            description: z.string(),
            members: z.array(string().uuid()).default([]), // Use "optional()" requires a refactor in 'const team' logic
        })

        const { name, description, members } = bodySchema.parse(req.body)
        const existTeam = await prisma.teams.findFirst({ where: { name } })


        if (existTeam) {
            throw new AppError("This team has already exist!", 409)
        }

        //Verify if teams members are informed
        if (members && members.length > 0) {

            const findedUsers = await prisma.users.findMany({
                where: { id: { in: members } }
            })

            if (findedUsers.length !== members.length) { //Members lenght from req.body has to be bigger than finded user, or exist invalid uuids on req body

                const validUserId = findedUsers.map(user => user.id)
                const invalidUserId = members.filter(id => !validUserId.includes(id))

                throw new AppError(`Invalid id received from body. Invalid id: ${invalidUserId.join(", ")}`, 404)
            }
            //return res.json(validUserId)
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
            },
            include: {
                members: {
                    select: {
                        user: {
                            select: {
                                name: true,
                                email: true,
                                id: true
                            }
                        }
                    }
                }
            }
        })

        return res.json({ team })
    }

    
}

export { TeamsAdministrationController }