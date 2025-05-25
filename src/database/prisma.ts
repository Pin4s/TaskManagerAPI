import { env } from "@/env";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export { prisma }