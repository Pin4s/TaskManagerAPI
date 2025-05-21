import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError";
import { prisma } from "@/database/prisma";
import z, { optional, string } from "zod";

class TeamsAdministrationController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
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
        } catch (error) {
            next(error)
        }
    }

    async index(req: Request, res: Response, next: NextFunction) {
        try {
            const teams = await prisma.teams.findMany({
                select: {
                    name: true,
                    description: true,
                    id: true,
                    createdAt: true,
                    updatedAt: true
                }
            })

            return res.json(teams)
        } catch (error) {
            next(error)
        }
    }

    async show(req: Request, res: Response, next: NextFunction) {
        try {
            const paramsSchema = z.object({
                id: z.string().uuid()
            })

            const { id } = paramsSchema.parse(req.params)

            const showTeam = await prisma.teams.findUnique({
                where: { id }, select: {
                    name: true,
                    description: true,
                    id: true,
                    createdAt: true,
                    updatedAt: true,
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
                },

            })

            if (!showTeam) {
                throw new AppError("Team not found", 404)
            }

            return res.json({ showTeam })
        } catch (error) {
            next(error)
        }
    }


    async update(req: Request, res: Response, next: NextFunction) {
        try {
            //ONLY for Update Name and Desc.

            const bodySchema = z.object({
                name: z.string().min(3).max(100),
                description: z.string(),
            })

            const paramsSchema = z.object({
                id: z.string().uuid()
            })

            const { id } = paramsSchema.parse(req.params)
            const team = await prisma.teams.findUnique({ where: { id } })

            if (!team) {
                throw new AppError("Team ID does not exist", 404)
            }

            const { name, description } = bodySchema.parse(req.body)

            const update = await prisma.teams.update({
                data: {
                    name,
                    description
                },
                where: { id }
            })

            return res.json({ update })
        } catch (error) {
            next(error)
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const paramsSchema = z.object({
                id: z.string().uuid()
            })

            const { id: teamId } = paramsSchema.parse(req.params); // Mantive a renomeação que fiz na explicação anterior para clareza, mas a lógica é a mesma

            const teamToValidate = await prisma.teams.findUnique({
                where: { id: teamId },
            });

            if (!teamToValidate) {
                throw new AppError("Team not found", 404);
            }

            await prisma.teams.delete({
                where: { id: teamId },
            });

            return res.status(200).json({ message: "Team and all its related data (memberships, tasks) deleted successfully!" });
        } catch (error) {
            next(error)
        }
    }

    async addMember(req: Request, res: Response, next: NextFunction) {
        try {
            const paramsSchema = z.object({
                id: z.string().uuid(),
            });

            const bodySchema = z.object({
                userId: z.string().uuid(),
            });

            const { id } = paramsSchema.parse(req.params);
            const { userId } = bodySchema.parse(req.body);

            const team = await prisma.teams.findUnique({
                where: { id: id },
            });

            if (!team) {
                throw new AppError("Team not found", 404);
            }

            const userToAdd = await prisma.users.findUnique({
                where: { id: userId },
            });

            if (!userToAdd) {
                throw new AppError("User to be added not found", 404);
            }

            const existingMembershipAnyTeam = await prisma.teamMembers.findFirst({
                where: {
                    userId: userId,
                },
                include: {
                    team: {
                        select: { name: true, id: true }
                    }
                }
            });

            if (existingMembershipAnyTeam) {
                if (existingMembershipAnyTeam.teamId === id) {
                    throw new AppError(
                        `User is already a member of this team ('${existingMembershipAnyTeam.team.name}').`,
                        409
                    );
                } else {
                    throw new AppError(
                        `User is already a member of another team ('${existingMembershipAnyTeam.team.name}'). Please remove them from the current team before adding to a new one.`,
                        409
                    );
                }
            }

            const newTeamMember = await prisma.teamMembers.create({
                data: {
                    teamId: id,
                    userId: userId,
                },
                include: {
                    user: {
                        select: { id: true, name: true, email: true },
                    },
                    team: {
                        select: { id: true, name: true },
                    }
                }
            });

            return res.status(201).json({
                message: "Member added to team successfully!",
                membership: newTeamMember,
            });
        } catch (error) {
            next(error)
        }
    }

    async removeMember(req: Request, res: Response, next: NextFunction) {
        try {
            const paramsSchema = z.object({
                id: z.string().uuid(),
                userId: z.string().uuid(),
            });

            const { id, userId } = paramsSchema.parse(req.params);

            const teamMemberEntry = await prisma.teamMembers.findUnique({
                where: {
                    userId_teamId: {
                        userId: userId,
                        teamId: id,
                    }
                }
            });

            if (!teamMemberEntry) {
                throw new AppError("Team member association not found for this user and team", 404);
            }

            await prisma.teamMembers.delete({
                where: {
                    userId_teamId: {
                        userId: userId,
                        teamId: id,
                    }
                }
            });

            return res.status(200).json({ message: "Member removed from team successfully" });
        } catch (error) {
            next(error)
        }
    }
}

export { TeamsAdministrationController }