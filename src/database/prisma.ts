import { PrismaClient } from "@prisma/client";

// initializing prisma and defining log only on dev/homolog (based on NODE_ENV in the run command)

export const prisma = new PrismaClient({
    log: process.env.NODE_ENV !== "production" ? [] : ["query"],
})