import request from "supertest"
import { app } from "@/app"
import { prisma } from "@/database/prisma"

describe("Registercontroller", () => {
    let user_id: string
    beforeAll(async () => {
        const res = await request(app).post("/register").send({
            name: "Test User",
            email: "testuser@example.com",
            password: "password123"
        });
        console.log('Register response:', res.status, res.body);
    });

    afterAll(async () => {
        if (user_id) {
            await prisma.users.delete({ where: { id: user_id } })
        }
    })

    test("Should init session with sucess", async () => {
        const response = await request(app).post("/sessions").send({
            email: "testuser@example.com",
            password: "password123"
        })

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("token")
        expect(response.body).toHaveProperty("user")
        expect(response.body.user.role).toBe("member")

        user_id = response.body.user.id
    })
})