"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/routes/registerRoute.ts
var registerRoute_exports = {};
__export(registerRoute_exports, {
  registerRoute: () => registerRoute
});
module.exports = __toCommonJS(registerRoute_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  registerRoute
});
