import { env } from "../env"

// main file to define JWT configuration

export const authConfig = {
    jwt: {
        secret: env.JWT_SECRET,
        expiresIn: "1d"
    }
}