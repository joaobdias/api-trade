import { errorHandling } from "./middleware/error-handling"
import { routes } from "./routes"
import express from "express"
import "express-async-errors"

// main script file

const app = express() // define a express element
app.use(express.json()) // define express to use JSON


app.use(routes) // detach routes to another file
app.use(errorHandling) // middleware to handle with errors

export { app }