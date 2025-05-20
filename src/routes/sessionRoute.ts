import { SessionController } from "@/controllers/sessionController";
import { Router } from "express";

const sessionController = new SessionController
const sessionRoute = Router()

sessionRoute.post("/", sessionController.create)

export { sessionRoute }