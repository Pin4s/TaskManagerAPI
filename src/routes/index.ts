import { Router } from "express";
import { registerRoute } from "./registerRoute";
import { sessionRoute } from "./sessionRoute";
import { teamsAdministrationRoute } from "./teamAdministrationRoute";
import { taskRoute } from "./taskRoute";

const routes = Router()

routes.use("/register", registerRoute)
routes.use("/sessions", sessionRoute)
routes.use("/teams", teamsAdministrationRoute)
routes.use("/tasks", taskRoute)


export { routes }