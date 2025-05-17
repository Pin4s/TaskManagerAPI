import express from 'express'
import { Request, Response } from 'express'

const app = express()

app.use(express.json())

app.post("/", (req: Request, res: Response) => {res.json({ message: "Ok!" })})

export { app }