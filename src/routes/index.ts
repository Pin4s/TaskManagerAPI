import { Router } from "express";
import { registerRoute } from "./registerRoute";


const routes = Router()

routes.use("/register", registerRoute)

export { routes }