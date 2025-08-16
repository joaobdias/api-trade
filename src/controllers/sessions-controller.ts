import { Request, Response } from "express";
import { prisma } from "@/database/prisma";
import { compare } from "bcrypt";
import { z } from "zod"
import { AppError } from "@/utils/AppError";
import { authConfig } from "@/configs/auth"; 
import { sign } from "jsonwebtoken";

class SessionsController {

    async create (request: Request, response: Response){
        const bodySchema = z.object ({
            email: z.string().email(),
            password: z.string().min(6)
        })

        const {email, password} = bodySchema.parse(request.body)

        const user = await prisma.user.findFirst({
            where: { email },
        })

        if (!user) throw new AppError ("Email/Password not match", 401)

        const passMatch = await compare(password, user.password)

        if (!passMatch) throw new AppError ("Email/Password not match", 401)

        const { secret, expiresIn } = authConfig.jwt

        const token = sign({ role: user.role ?? "customer"}, secret, {subject: user.id, expiresIn})

        // const { password: hashPass, ...userWithoutPass} = user

        // return response.json({token, user: userWithoutPass})

        return response.status(201).json({message: "OK"})
    }

}

export { SessionsController }