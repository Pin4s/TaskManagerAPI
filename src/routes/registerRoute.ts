import { app } from "@/app";
import { RegisterController } from "@/controllers/registerController";
import { Router } from "express";

const registerRoute = Router()
const registerController = new RegisterController()

registerRoute.post("/", registerController.create)

export { registerRoute }
