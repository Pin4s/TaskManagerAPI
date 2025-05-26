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

// src/app.ts
var app_exports = {};
__export(app_exports, {
  app: () => app
});
module.exports = __toCommonJS(app_exports);
var import_express_async_errors = require("express-async-errors");
var import_express6 = __toESM(require("express"));

// src/routes/index.ts
var import_express5 = require("express");

// src/controllers/registerController.ts
var import_zod = require("zod");

// src/database/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/utils/AppError.ts
var AppError = class {
  message;
  statusCode;
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/controllers/registerController.ts
var import_bcrypt = require("bcrypt");
var RegisterController = class {
  async create(req, res, p0) {
    const bodySchema = import_zod.z.object({
      name: import_zod.z.string().trim().min(3),
      email: import_zod.z.string().email(),
      password: import_zod.z.string().min(6)
    });
    const { name, email, password } = bodySchema.parse(req.body);
    const sameEmail = await prisma.users.findFirst({
      where: { email }
    });
    if (sameEmail) {
      throw new AppError("An user with this email has already exist", 409);
    }
    const hashedPassword = await (0, import_bcrypt.hash)(password, 8);
    const user = await prisma.users.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    });
    const { password: _, ...userWithoutPassword } = user;
    return res.status(201).json({ message: "user created!", userWithoutPassword });
  }
};

// src/routes/registerRoute.ts
var import_express = require("express");
var registerRoute = (0, import_express.Router)();
var registerController = new RegisterController();
registerRoute.post("/", registerController.create);

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

// src/controllers/sessionController.ts
var import_bcrypt2 = require("bcrypt");
var import_jsonwebtoken = require("jsonwebtoken");
var import_zod3 = __toESM(require("zod"));
var SessionController = class {
  async create(req, res, next) {
    const bodySchema = import_zod3.default.object({
      email: import_zod3.default.string().email(),
      password: import_zod3.default.string().min(6)
    });
    const { email, password } = bodySchema.parse(req.body);
    const user = await prisma.users.findFirst({
      where: { email }
    });
    if (!user) {
      throw new AppError("Email ou password invalid!", 401);
    }
    const passwordMatched = await (0, import_bcrypt2.compare)(password, user.password);
    if (!passwordMatched) {
      throw new AppError("Email ou password invalid!", 401);
    }
    const { password: _, ...userWithoutPassword } = user;
    const { secret, expiresIn } = authConfig.jwt;
    const token = (0, import_jsonwebtoken.sign)({ role: user.role ?? "member" }, secret, { subject: user.id, expiresIn: "1d" });
    return res.json({ token, user: userWithoutPassword });
  }
};

// src/routes/sessionRoute.ts
var import_express2 = require("express");
var sessionController = new SessionController();
var sessionRoute = (0, import_express2.Router)();
sessionRoute.post("/", sessionController.create);

// src/controllers/teamAdministrationController.ts
var import_zod4 = __toESM(require("zod"));
var TeamsAdministrationController = class {
  async create(req, res, next) {
    try {
      const bodySchema = import_zod4.default.object({
        name: import_zod4.default.string().min(3).max(100),
        description: import_zod4.default.string(),
        members: import_zod4.default.array((0, import_zod4.string)().uuid()).default([])
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
      const paramsSchema = import_zod4.default.object({
        id: import_zod4.default.string().uuid()
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
      const bodySchema = import_zod4.default.object({
        name: import_zod4.default.string().min(3).max(100),
        description: import_zod4.default.string()
      });
      const paramsSchema = import_zod4.default.object({
        id: import_zod4.default.string().uuid()
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
      const paramsSchema = import_zod4.default.object({
        id: import_zod4.default.string().uuid()
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
      const paramsSchema = import_zod4.default.object({
        id: import_zod4.default.string().uuid()
      });
      const bodySchema = import_zod4.default.object({
        userId: import_zod4.default.string().uuid()
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
      const paramsSchema = import_zod4.default.object({
        id: import_zod4.default.string().uuid(),
        userId: import_zod4.default.string().uuid()
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

// src/middlewares/ensureAuthenticated.ts
var import_jsonwebtoken2 = require("jsonwebtoken");
function ensureAuthenticated(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new AppError("Invalid JWT Token");
    }
    const [, token] = authHeader.split(" ");
    const { sub: user_id, role } = (0, import_jsonwebtoken2.verify)(token, authConfig.jwt.secret);
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
var import_express3 = require("express");
var teamsAdministrationRoute = (0, import_express3.Router)();
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

// src/controllers/taskController.ts
var import_zod5 = __toESM(require("zod"));
var import_client2 = require("@prisma/client");
var TaskController = class {
  async create(req, res, next) {
    try {
      const bodySchema = import_zod5.default.object({
        title: import_zod5.default.string().min(3).max(200),
        description: import_zod5.default.string(),
        status: import_zod5.default.enum([import_client2.Status.pending, import_client2.Status.inProgress, import_client2.Status.completed]).default("pending"),
        priority: import_zod5.default.enum(["high", "medium", "low"]).default("medium"),
        assignedTo: import_zod5.default.string().uuid()
      });
      const { title, description, status, priority, assignedTo } = bodySchema.parse(req.body);
      const user = await prisma.users.findUnique({ where: { id: assignedTo }, select: { name: true } });
      if (!user) {
        throw new AppError("Assigned user not found", 404);
      }
      const userMembership = await prisma.teamMembers.findFirst({
        where: { userId: assignedTo },
        select: {
          teamId: true
        }
      });
      const taskTeamId = userMembership?.teamId;
      if (!taskTeamId) {
        throw new AppError(
          "Assigned user does not belong to any team. A task must be associated with a team.",
          400
        );
      }
      const duplicateTask = await prisma.tasks.findFirst({
        where: {
          AND: [
            { title },
            { teamId: taskTeamId }
          ]
        }
      });
      if (duplicateTask) {
        throw new AppError("Attention! A task with the same name already exists in this team.");
      }
      const task = await prisma.tasks.create({
        data: {
          title,
          description,
          status,
          priority,
          assignedTo,
          teamId: taskTeamId
        },
        include: {
          assigned: { select: { name: true, email: true, id: true } },
          team: { select: { name: true, id: true } }
        }
      });
      return res.json({ message: "Sucessfully", task });
    } catch (error) {
      next(error);
    }
  }
  async index(req, res, next) {
    try {
      let whereCondition = {};
      if (!req.user || typeof req.user.role === "undefined") {
        return res.status(401).json({ error: "User not authenticated or role not defined." });
      }
      if (req.user.role !== "admin") {
        const teamMemberships = await prisma.teamMembers.findMany({
          where: { userId: req.user.id },
          select: { teamId: true }
        });
        const teamIds = teamMemberships.map((tm) => tm.teamId);
        if (teamIds.length === 0) {
          return res.status(403).json({ error: "Access denied. User is not associated with any team." });
        }
        whereCondition = {
          teamId: { in: teamIds }
        };
      }
      const tasks = await prisma.tasks.findMany({
        where: whereCondition,
        select: {
          id: true,
          title: true,
          description: true,
          team: true,
          assigned: {
            select: {
              name: true,
              email: true,
              id: true
            }
          }
        }
      });
      return res.json(tasks);
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      const bodySchema = import_zod5.default.object({
        title: import_zod5.default.string().min(3).max(200).optional(),
        description: import_zod5.default.string().optional(),
        status: import_zod5.default.enum([import_client2.Status.pending, import_client2.Status.inProgress, import_client2.Status.completed]).optional(),
        priority: import_zod5.default.enum([import_client2.Priority.low, import_client2.Priority.medium, import_client2.Priority.high]).optional(),
        assignedTo: import_zod5.default.string().uuid().optional()
      }).strict();
      const paramsSchema = import_zod5.default.object({
        id: import_zod5.default.string().uuid()
      });
      const { title, description, status, priority, assignedTo } = bodySchema.parse(req.body);
      const { id } = paramsSchema.parse(req.params);
      if (Object.keys(req.body).length === 0) {
        throw new AppError("No content to update", 400);
      }
      const task = await prisma.tasks.findUnique({
        where: { id },
        select: { assignedTo: true }
      });
      if (!task) {
        return res.status(404).json({ error: "Task not found." });
      }
      if (!req.user || typeof req.user.role === "undefined") {
        return res.status(401).json({ error: "User not authenticated or role not defined." });
      }
      if (req.user.role !== "admin") {
        if (task.assignedTo !== req.user.id) {
          return res.status(403).json({ error: "Access denied. You cannot edit tasks of other users." });
        }
      }
      const update = await prisma.tasks.update({
        where: { id },
        data: {
          title,
          description,
          status,
          priority,
          assignedTo
        }
      });
      return res.json(update);
    } catch (error) {
      next(error);
    }
  }
  async remove(req, res, next) {
    try {
      const paramsSchema = import_zod5.default.object({
        id: import_zod5.default.string().uuid()
      });
      const { id } = paramsSchema.parse(req.params);
      const deletedTask = await prisma.tasks.delete({ where: { id } });
      return res.json({ message: `Task deleted`, deletedTask });
    } catch (error) {
      next(error);
    }
  }
};

// src/routes/taskRoute.ts
var import_express4 = require("express");
var taskController = new TaskController();
var taskRoute = (0, import_express4.Router)();
taskRoute.use(ensureAuthenticated);
taskRoute.post("/", taskController.create);
taskRoute.get("/", taskController.index);
taskRoute.patch("/:id", taskController.update);
taskRoute.delete("/:id", taskController.remove);

// src/routes/index.ts
var routes = (0, import_express5.Router)();
routes.use("/register", registerRoute);
routes.use("/sessions", sessionRoute);
routes.use("/teams", teamsAdministrationRoute);
routes.use("/tasks", taskRoute);

// src/middlewares/errorHandler.ts
var import_zod6 = require("zod");
function errorHandler(error, req, res, next) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  if (error instanceof import_zod6.ZodError) {
    return res.status(400).json({
      message: "Validation failed",
      issues: error.errors
    });
  }
  return res.status(500).json({ message: error.message });
}

// src/app.ts
var app = (0, import_express6.default)();
app.use(import_express6.default.json());
app.use(routes);
app.use(errorHandler);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app
});
