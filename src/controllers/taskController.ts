import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError";
import { prisma } from "@/database/prisma";
import z from "zod";
import { teamsAdministrationRoute } from "@/routes/teamAdministrationRoute";
import { Status } from "@prisma/client";

class TaskController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const bodySchema = z.object({
                title: z.string().min(3).max(200),
                description: z.string(),
                status: z.enum([Status.pending, Status.inProgress, Status.completed]).default("pending"),
                priority: z.enum(["high", "medium", "low"]).default("medium"),
                assignedTo: z.string().uuid(),
            })

            const { title, description, status, priority, assignedTo } = bodySchema.parse(req.body)

            const user = await prisma.users.findUnique({ where: { id: assignedTo }, select: { name: true } })
            if (!user) {
                throw new AppError("Assigned user not found", 404)
            }

            const userMembership = await prisma.teamMembers.findFirst({
                where: { userId: assignedTo },
                select: {
                    teamId: true
                }
            })

            const taskTeamId = userMembership?.teamId

            if (!taskTeamId) {
                throw new AppError(
                    "Assigned user does not belong to any team. A task must be associated with a team.",
                    400
                );
            }

            const duplicateTask = await prisma.tasks.findFirst({
                where: {
                    AND: [
                        { title: title },
                        { teamId: taskTeamId }
                    ]
                }
            })

            if (duplicateTask) {
                throw new AppError("Attention! A task with the same name already exists in this team.")
            }

            const task = await prisma.tasks.create({
                data: {
                    title,
                    description,
                    status,
                    priority,
                    assignedTo,
                    teamId: taskTeamId
                },
                include: {
                    assigned: { select: { name: true, email: true, id: true } },
                    team: { select: { name: true, id: true } }
                }
            })

            return res.json({ message: "Sucessfully", task })
        } catch (error) {
            next(error)
        }
    }

    async index(req: Request, res: Response, next: NextFunction) {
        try {
            const task = await prisma.tasks.findMany({
                select: {
                    title: true,
                    description: true,
                    team: true,
                    assigned: {
                        select: {
                            name: true,
                            email: true,
                            id: true
                        }
                    }
                }
            })

            return res.json(task)
        } catch (error) {
            next(error)
        }
    }

    async update(req: Request, res: Response, next: NextFunction){
        
    }
}

export { TaskController }