import request from "supertest"
import { app } from "@/app"
import { prisma } from "@/database/prisma"

describe("Registercontroller", () => {
    let user_id: string;
    afterAll(async () => {
        if (user_id) {
            await prisma.users.delete({ where: { id: user_id } })
        }
    })

    test("Should create a user without any errors", async () => {

        if (user_id) {
            await prisma.users.delete({ where: { id: user_id } })
        }
        const response = await request(app).post("/register").send({
            name: "Test User",
            email: `testuser${Date.now()}@example.com`,
            password: "password123"
        })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("userWithoutPassword.id")
        expect(response.body.userWithoutPassword.name).toBe("Test User")

        user_id = response.body.userWithoutPassword.id
    })
})

