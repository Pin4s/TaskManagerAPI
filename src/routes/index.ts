import { Router } from "express";
import { registerRoute } from "./registerRoute";
import { sessionRoute } from "./sessionRoute";


const routes = Router()

routes.use("/register", registerRoute)
routes.use("/sessions", sessionRoute)

export { routes }