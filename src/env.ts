import { z } from "zod"

// using ZOD to avoid .env errors

const envSchema = z.object({ // defining a pattern to .env
    DATABASE_URL: z.string().url(),
    JWT_SECRET: z.string(),
    PORT: z.string().max(5).default("3333") 
})

export const env = envSchema.parse(process.env)