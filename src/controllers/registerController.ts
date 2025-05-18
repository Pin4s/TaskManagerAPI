import { Response, Request, NextFunction } from "express"
import { z } from 'zod'
import { prisma } from '@/database/prisma'

class RegisterController {
    async create(req: Request, res: Response) {

        const bodySchema = z.object({
            name: z.string().trim().min(3),
            email: z.string().email(),
            password: z.string().min(6)
        })

        const { name, email, password } = bodySchema.parse(req.body)

        const sameEmail = await prisma.users.findFirst({
            where: { email }
        })

        


        return res.json({ message: "User created" })
    }
}

export { RegisterController }