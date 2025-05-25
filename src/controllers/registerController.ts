import { Response, Request, NextFunction } from "express"
import { z } from 'zod'
import { prisma } from '@/database/prisma'
import { AppError } from "@/utils/AppError"
import { hash } from "bcrypt"

class RegisterController {
    async create(req: Request, res: Response, p0: NextFunction) {

        const bodySchema = z.object({
            name: z.string().trim().min(3),
            email: z.string().email(),
            password: z.string().min(6)
        })

        const { name, email, password } = bodySchema.parse(req.body)

        const sameEmail = await prisma.users.findFirst({
            where: { email }
        })

        if (sameEmail) {
            throw new AppError("An user with this email has already exist", 409)
        }

        const hashedPassword = await hash(password, 8)

        const user = await prisma.users.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })

        const { password: _, ...userWithoutPassword } = user

        return res.status(201).json({ message: "user created!", userWithoutPassword })
    }
}

export { RegisterController }