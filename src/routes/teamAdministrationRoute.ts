import { TeamsAdministrationController } from "@/controllers/teamAdministrationController";
import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { verifyAuthorization } from "@/middlewares/verifyAuthorization";
import { Router } from "express";

const teamsAdministrationRoute = Router()
const teamsAdministrationController = new TeamsAdministrationController

teamsAdministrationRoute.use(ensureAuthenticated)
teamsAdministrationRoute.use(verifyAuthorization(["admin"]))

teamsAdministrationRoute.get("/", teamsAdministrationController.index)
teamsAdministrationRoute.post("/", teamsAdministrationController.create)
teamsAdministrationRoute.get("/:id", teamsAdministrationController.show)
teamsAdministrationRoute.patch("/:id", teamsAdministrationController.update)



export { teamsAdministrationRoute }