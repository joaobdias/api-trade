import request from "supertest"
import { app } from "@/app"
import { prisma } from "@/database/prisma"

describe("UsersController", () => {
    // let user_id: string

    // afterAll(async () => {
    //     await prisma.user.delete({where: {id: user_id}})
    // })

    it("should create a new user", async () => {
        const response = await request(app).post("/users").send({
            name: "Test User",
            email: "testuser@example.com",
            password: "123456"
        })

        expect(response.status).toBe(201)
        // expect(response.body).toHaveProperty("id") //if returning id after creation
        // expect(response.body.name).toBe("Test User") // same from above

        // user_id = response.body.id // if return id, i can deleter after all
    })

    it("should throw a error if user with same email", async () => { 
        const response = await request(app).post("/users").send({
            name: "Test User",
            email: "testuser@example.com",
            password: "123456"
        })
    
        expect(response.status).toBe(400)
        expect(response.body.message).toBe("User with same email already exists")
    })

})