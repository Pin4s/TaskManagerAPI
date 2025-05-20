import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { TeamsAdministrationController } from "@/controllers/teamAdministrationController";
import { Router } from "express";

const teamsRoute = Router()
const teamsAdministrationController = new TeamsAdministrationController

teamsRoute.use(ensureAuthenticated)
teamsRoute.post("/", teamsAdministrationController.create)
