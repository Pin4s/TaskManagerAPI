

import request from "supertest"
import { app } from "@/app"
import { prisma } from "@/database/prisma"

describe("taskController", () => {
    let user_id: string
    let token: string

    beforeAll(async () => {
        const resRegister = await request(app).post("/register").send({
            name: "Test User",
            email: `testuser${Date.now()}@example.com`,
            password: "password123"
        })
        user_id = resRegister.body.userWithoutPassword.id

        const resLogin = await request(app).post("/sessions").send({
            email: resRegister.body.userWithoutPassword.email,
            password: "password123"
        })
        token = resLogin.body.token
    })

    afterAll(async () => {
        await prisma.users.deleteMany({
            where: { email: { contains: 'testuser' } }
        })
    })

    test("Should NOT list teams without auth", async () => {

        const response = await request(app).get("/teams")
        expect(response.status).toBe(401)
    })

})
