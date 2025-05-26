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

// src/routes/taskRoute.ts
var taskRoute_exports = {};
__export(taskRoute_exports, {
  taskRoute: () => taskRoute
});
module.exports = __toCommonJS(taskRoute_exports);

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

// src/controllers/taskController.ts
var import_zod = __toESM(require("zod"));
var import_client2 = require("@prisma/client");
var TaskController = class {
  async create(req, res, next) {
    try {
      const bodySchema = import_zod.default.object({
        title: import_zod.default.string().min(3).max(200),
        description: import_zod.default.string(),
        status: import_zod.default.enum([import_client2.Status.pending, import_client2.Status.inProgress, import_client2.Status.completed]).default("pending"),
        priority: import_zod.default.enum(["high", "medium", "low"]).default("medium"),
        assignedTo: import_zod.default.string().uuid()
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
      const bodySchema = import_zod.default.object({
        title: import_zod.default.string().min(3).max(200).optional(),
        description: import_zod.default.string().optional(),
        status: import_zod.default.enum([import_client2.Status.pending, import_client2.Status.inProgress, import_client2.Status.completed]).optional(),
        priority: import_zod.default.enum([import_client2.Priority.low, import_client2.Priority.medium, import_client2.Priority.high]).optional(),
        assignedTo: import_zod.default.string().uuid().optional()
      }).strict();
      const paramsSchema = import_zod.default.object({
        id: import_zod.default.string().uuid()
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
      const paramsSchema = import_zod.default.object({
        id: import_zod.default.string().uuid()
      });
      const { id } = paramsSchema.parse(req.params);
      const deletedTask = await prisma.tasks.delete({ where: { id } });
      return res.json({ message: `Task deleted`, deletedTask });
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

// src/routes/taskRoute.ts
var import_express = require("express");
var taskController = new TaskController();
var taskRoute = (0, import_express.Router)();
taskRoute.use(ensureAuthenticated);
taskRoute.post("/", taskController.create);
taskRoute.get("/", taskController.index);
taskRoute.patch("/:id", taskController.update);
taskRoute.delete("/:id", taskController.remove);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  taskRoute
});
