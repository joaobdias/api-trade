import express from "express"

const PORT = 3333
const app = express()
app.use(express.json())

export { app, PORT }