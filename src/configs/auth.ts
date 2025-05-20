import { env } from "@/env"

console.log(env.JWT_SECRET)
export const authConfig = {
    jwt: {
        secret: env.JWT_SECRET,
        expiresIn: "1d"
    }
}