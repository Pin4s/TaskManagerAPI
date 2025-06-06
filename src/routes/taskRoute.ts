import { authConfig } from "@/configs/auth";
import { TaskController } from "@/controllers/taskController";
import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { verifyAuthorization } from "@/middlewares/verifyAuthorization";
import { Router } from "express";

const taskController = new TaskController
const taskRoute = Router()

taskRoute.use(ensureAuthenticated)


taskRoute.post("/", taskController.create)
taskRoute.get("/", taskController.index)
taskRoute.patch("/:id", taskController.update)
taskRoute.delete("/:id", taskController.remove)

export { taskRoute }