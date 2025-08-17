import { app } from "@/app"
import { env } from "./env"

// initializing backend server on PORT

const PORT = env.PORT

app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`)
})