import { Request, Response, NextFunction } from "express";
import { authConfig } from "@/configs/auth";
import { AppError } from "@/utils/AppError";
import { compare } from "bcrypt";
import { prisma } from "@/database/prisma";
import { sign } from "jsonwebtoken"
import z from "zod";

class SessionController {
    async create(req: Request, res: Response, next: NextFunction) {
        const bodySchema = z.object({
            email: z.string().email(),
            password: z.string().min(6)
        })

        const { email, password } = bodySchema.parse(req.body)

        const user = await prisma.users.findFirst({
            where: { email }
        })

        if (!user) {
            throw new AppError("Email ou password invalid!", 401)
        }

        const passwordMatched = await compare(password, user.password)

        if (!passwordMatched) {
            throw new AppError("Email ou password invalid!", 401)
        }

        const { password: _, ...userWithoutPassword } = user

        const { secret, expiresIn } = authConfig.jwt

        const token = sign({ role: user.role ?? "member" }, secret, { subject: user.id, expiresIn: "1d" })

        return res.json({ token, user: userWithoutPassword })

    }
}

export { SessionController }