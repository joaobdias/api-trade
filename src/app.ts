import express from "express"
import "express-async-errors"

import { routes } from "./routes"
import { errorHandling } from "./middleware/error-handling"

const PORT = 3333
const app = express()
app.use(express.json())


app.use(routes)
app.use(errorHandling)

export { app, PORT }