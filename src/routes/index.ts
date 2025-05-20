import { Router } from "express";
import { registerRoute } from "./registerRoute";
import { sessionRoute } from "./sessionRoute";
import { teamsAdministrationRoute } from "./teamAdministrationRoute";

const routes = Router()

routes.use("/register", registerRoute)
routes.use("/sessions", sessionRoute)
routes.use("/teams", teamsAdministrationRoute)



export { routes }