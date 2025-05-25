import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError";
import { prisma } from "@/database/prisma";
import z, { object } from "zod";
import { Priority, Status } from "@prisma/client";
import { PrismaClient } from "@prisma/client/extension";

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
            let whereCondition = {}

            if (!req.user || typeof req.user.role === 'undefined') {
                return res.status(401).json({ error: 'User not authenticated or role not defined.' })
            }

            if (req.user.role !== 'admin') {
                const teamMemberships = await prisma.teamMembers.findMany({
                    where: { userId: req.user.id },
                    select: { teamId: true }
                })

                const teamIds = teamMemberships.map(tm => tm.teamId)

                if (teamIds.length === 0) {
                    return res.status(403).json({ error: 'Access denied. User is not associated with any team.' })
                }

                whereCondition = {
                    teamId: { in: teamIds }
                }
            }

            const tasks = await prisma.tasks.findMany({
                where: whereCondition,
                select: {
                    id: true,
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

            return res.json(tasks)
        } catch (error) {
            next(error)
        }
    }



    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const bodySchema = z.object({
                title: z.string().min(3).max(200).optional(),
                description: z.string().optional(),
                status: z.enum([Status.pending, Status.inProgress, Status.completed]).optional(),
                priority: z.enum([Priority.low, Priority.medium, Priority.high]).optional(),
                assignedTo: z.string().uuid().optional()
            }).strict()

            const paramsSchema = z.object({
                id: z.string().uuid()
            })

            const { title, description, status, priority, assignedTo } = bodySchema.parse(req.body)
            const { id } = paramsSchema.parse(req.params)

            if (Object.keys(req.body).length === 0) {
                throw new AppError("No content to update", 400)
            }

            const task = await prisma.tasks.findUnique({
                where: { id },
                select: { assignedTo: true }
            })

            if (!task) {
                return res.status(404).json({ error: 'Task not found.' })
            }

            if (!req.user || typeof req.user.role === 'undefined') {
                return res.status(401).json({ error: 'User not authenticated or role not defined.' })
            }

            if (req.user.role !== 'admin') {
                if (task.assignedTo !== req.user.id) {
                    return res.status(403).json({ error: 'Access denied. You cannot edit tasks of other users.' })
                }
            }

            const update = await prisma.tasks.update({
                where: { id },
                data: {
                    title,
                    description,
                    status,
                    priority,
                    assignedTo
                }
            })

            return res.json(update)
        } catch (error) {
            next(error)
        }
    }



    async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const paramsSchema = z.object({
                id: z.string().uuid()
            })

            const { id } = paramsSchema.parse(req.params)

            const deletedTask = await prisma.tasks.delete({ where: { id } })

            return res.json({ message: `Task deleted`, deletedTask })

        } catch (error) {
            next(error)
        }
    }
}

export { TaskController }