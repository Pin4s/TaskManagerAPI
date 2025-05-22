import { authConfig } from "@/configs/auth";
import { TaskController } from "@/controllers/taskController";
import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { verifyAuthorization } from "@/middlewares/verifyAuthorization";
import { Router } from "express";

const taskController = new TaskController
const taskRoute = Router()

taskRoute.use(ensureAuthenticated)
taskRoute.use(verifyAuthorization(["admin"]))

taskRoute.post("/", taskController.create)

export { taskRoute }