"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/routes/teamAdministrationRoute.ts
var teamAdministrationRoute_exports = {};
__export(teamAdministrationRoute_exports, {
  teamsAdministrationRoute: () => teamsAdministrationRoute
});
module.exports = __toCommonJS(teamAdministrationRoute_exports);

// src/utils/AppError.ts
var AppError = class {
  message;
  statusCode;
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/database/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/controllers/teamAdministrationController.ts
var import_zod = __toESM(require("zod"));
var TeamsAdministrationController = class {
  async create(req, res, next) {
    try {
      const bodySchema = import_zod.default.object({
        name: import_zod.default.string().min(3).max(100),
        description: import_zod.default.string(),
        members: import_zod.default.array((0, import_zod.string)().uuid()).default([])
        // Use "optional()" requires a refactor in 'const team' logic
      });
      const { name, description, members } = bodySchema.parse(req.body);
      const existTeam = await prisma.teams.findFirst({ where: { name } });
      if (existTeam) {
        throw new AppError("This team has already exist!", 409);
      }
      if (members && members.length > 0) {
        const findedUsers = await prisma.users.findMany({
          where: { id: { in: members } }
        });
        if (findedUsers.length !== members.length) {
          const validUserId = findedUsers.map((user) => user.id);
          const invalidUserId = members.filter((id) => !validUserId.includes(id));
          throw new AppError(`Invalid id received from body. Invalid id: ${invalidUserId.join(", ")}`, 404);
        }
      }
      const team = await prisma.teams.create({
        data: {
          name,
          description,
          members: {
            create: members.map((userId) => ({
              user: {
                connect: { id: userId }
              }
            }))
          }
        },
        include: {
          members: {
            select: {
              user: {
                select: {
                  name: true,
                  email: true,
                  id: true
                }
              }
            }
          }
        }
      });
      return res.json({ team });
    } catch (error) {
      next(error);
    }
  }
  async index(req, res, next) {
    try {
      const teams = await prisma.teams.findMany({
        select: {
          name: true,
          description: true,
          id: true,
          createdAt: true,
          updatedAt: true
        }
      });
      return res.json(teams);
    } catch (error) {
      next(error);
    }
  }
  async show(req, res, next) {
    try {
      const paramsSchema = import_zod.default.object({
        id: import_zod.default.string().uuid()
      });
      const { id } = paramsSchema.parse(req.params);
      const showTeam = await prisma.teams.findUnique({
        where: { id },
        select: {
          name: true,
          description: true,
          id: true,
          createdAt: true,
          updatedAt: true,
          members: {
            select: {
              user: {
                select: {
                  name: true,
                  email: true,
                  id: true
                }
              }
            }
          }
        }
      });
      if (!showTeam) {
        throw new AppError("Team not found", 404);
      }
      return res.json({ showTeam });
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      const bodySchema = import_zod.default.object({
        name: import_zod.default.string().min(3).max(100),
        description: import_zod.default.string()
      });
      const paramsSchema = import_zod.default.object({
        id: import_zod.default.string().uuid()
      });
      const { id } = paramsSchema.parse(req.params);
      const team = await prisma.teams.findUnique({ where: { id } });
      if (!team) {
        throw new AppError("Team ID does not exist", 404);
      }
      const { name, description } = bodySchema.parse(req.body);
      const update = await prisma.teams.update({
        data: {
          name,
          description
        },
        where: { id }
      });
      return res.json({ update });
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      const paramsSchema = import_zod.default.object({
        id: import_zod.default.string().uuid()
      });
      const { id: teamId } = paramsSchema.parse(req.params);
      const teamToValidate = await prisma.teams.findUnique({
        where: { id: teamId }
      });
      if (!teamToValidate) {
        throw new AppError("Team not found", 404);
      }
      await prisma.teams.delete({
        where: { id: teamId }
      });
      return res.status(200).json({ message: "Team and all its related data (memberships, tasks) deleted successfully!" });
    } catch (error) {
      next(error);
    }
  }
  async addMember(req, res, next) {
    try {
      const paramsSchema = import_zod.default.object({
        id: import_zod.default.string().uuid()
      });
      const bodySchema = import_zod.default.object({
        userId: import_zod.default.string().uuid()
      });
      const { id } = paramsSchema.parse(req.params);
      const { userId } = bodySchema.parse(req.body);
      const team = await prisma.teams.findUnique({
        where: { id }
      });
      if (!team) {
        throw new AppError("Team not found", 404);
      }
      const userToAdd = await prisma.users.findUnique({
        where: { id: userId }
      });
      if (!userToAdd) {
        throw new AppError("User to be added not found", 404);
      }
      const existingMembershipAnyTeam = await prisma.teamMembers.findFirst({
        where: {
          userId
        },
        include: {
          team: {
            select: { name: true, id: true }
          }
        }
      });
      if (existingMembershipAnyTeam) {
        if (existingMembershipAnyTeam.teamId === id) {
          throw new AppError(
            `User is already a member of this team ('${existingMembershipAnyTeam.team.name}').`,
            409
          );
        } else {
          throw new AppError(
            `User is already a member of another team ('${existingMembershipAnyTeam.team.name}'). Please remove them from the current team before adding to a new one.`,
            409
          );
        }
      }
      const newTeamMember = await prisma.teamMembers.create({
        data: {
          teamId: id,
          userId
        },
        include: {
          user: {
            select: { id: true, name: true, email: true }
          },
          team: {
            select: { id: true, name: true }
          }
        }
      });
      return res.status(201).json({
        message: "Member added to team successfully!",
        membership: newTeamMember
      });
    } catch (error) {
      next(error);
    }
  }
  async removeMember(req, res, next) {
    try {
      const paramsSchema = import_zod.default.object({
        id: import_zod.default.string().uuid(),
        userId: import_zod.default.string().uuid()
      });
      const { id, userId } = paramsSchema.parse(req.params);
      const teamMemberEntry = await prisma.teamMembers.findUnique({
        where: {
          userId_teamId: {
            userId,
            teamId: id
          }
        }
      });
      if (!teamMemberEntry) {
        throw new AppError("Team member association not found for this user and team", 404);
      }
      await prisma.teamMembers.delete({
        where: {
          userId_teamId: {
            userId,
            teamId: id
          }
        }
      });
      return res.status(200).json({ message: "Member removed from team successfully" });
    } catch (error) {
      next(error);
    }
  }
};

// src/env.ts
var import_zod2 = require("zod");
var envSchema = import_zod2.z.object({
  DATABASE_URL: import_zod2.z.string().url(),
  JWT_SECRET: import_zod2.z.string(),
  PORT: import_zod2.z.coerce.number().default(3333),
  PASSWORD: import_zod2.z.string()
});
var env = envSchema.parse(process.env);

// src/configs/auth.ts
console.log(env.JWT_SECRET);
var authConfig = {
  jwt: {
    secret: env.JWT_SECRET,
    expiresIn: "1d"
  }
};

// src/middlewares/ensureAuthenticated.ts
var import_jsonwebtoken = require("jsonwebtoken");
function ensureAuthenticated(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new AppError("Invalid JWT Token");
    }
    const [, token] = authHeader.split(" ");
    const { sub: user_id, role } = (0, import_jsonwebtoken.verify)(token, authConfig.jwt.secret);
    req.user = {
      id: user_id,
      role
    };
    return next();
  } catch (error) {
    throw new AppError("Invalid JWT Token", 401);
  }
}

// src/middlewares/verifyAuthorization.ts
function verifyAuthorization(role) {
  return (req, res, next) => {
    if (!req.user) {
      throw new AppError("Unauthorized!", 401);
    }
    if (!role.includes(req.user.role)) {
      throw new AppError("Unauthorized!", 401);
    }
    return next();
  };
}

// src/routes/teamAdministrationRoute.ts
var import_express = require("express");
var teamsAdministrationRoute = (0, import_express.Router)();
var teamsAdministrationController = new TeamsAdministrationController();
teamsAdministrationRoute.use(ensureAuthenticated);
teamsAdministrationRoute.use(verifyAuthorization(["admin"]));
teamsAdministrationRoute.get("/", teamsAdministrationController.index);
teamsAdministrationRoute.post("/", teamsAdministrationController.create);
teamsAdministrationRoute.get("/:id", teamsAdministrationController.show);
teamsAdministrationRoute.patch("/:id", teamsAdministrationController.update);
teamsAdministrationRoute.delete("/:id", teamsAdministrationController.delete);
teamsAdministrationRoute.post("/:id/members", teamsAdministrationController.addMember);
teamsAdministrationRoute.delete("/:id/members/:userId", teamsAdministrationController.removeMember);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  teamsAdministrationRoute
});
