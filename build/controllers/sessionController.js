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

// src/controllers/sessionController.ts
var sessionController_exports = {};
__export(sessionController_exports, {
  SessionController: () => SessionController
});
module.exports = __toCommonJS(sessionController_exports);

// src/env.ts
var import_zod = require("zod");
var envSchema = import_zod.z.object({
  DATABASE_URL: import_zod.z.string().url(),
  JWT_SECRET: import_zod.z.string(),
  PORT: import_zod.z.coerce.number().default(3333),
  PASSWORD: import_zod.z.string()
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

// src/utils/AppError.ts
var AppError = class {
  message;
  statusCode;
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/controllers/sessionController.ts
var import_bcrypt = require("bcrypt");

// src/database/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/controllers/sessionController.ts
var import_jsonwebtoken = require("jsonwebtoken");
var import_zod2 = __toESM(require("zod"));
var SessionController = class {
  async create(req, res, next) {
    const bodySchema = import_zod2.default.object({
      email: import_zod2.default.string().email(),
      password: import_zod2.default.string().min(6)
    });
    const { email, password } = bodySchema.parse(req.body);
    const user = await prisma.users.findFirst({
      where: { email }
    });
    if (!user) {
      throw new AppError("Email ou password invalid!", 401);
    }
    const passwordMatched = await (0, import_bcrypt.compare)(password, user.password);
    if (!passwordMatched) {
      throw new AppError("Email ou password invalid!", 401);
    }
    const { password: _, ...userWithoutPassword } = user;
    const { secret, expiresIn } = authConfig.jwt;
    const token = (0, import_jsonwebtoken.sign)({ role: user.role ?? "member" }, secret, { subject: user.id, expiresIn: "1d" });
    return res.json({ token, user: userWithoutPassword });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SessionController
});
