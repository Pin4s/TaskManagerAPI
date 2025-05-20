import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError";



function verifyAuthorization(req: Request, res: Response, next: NextFunction, role: string[]) {

    if (!req.user) {
        throw new AppError("Unauthorized!", 401)
    }

    if(!role.includes(req.user.role)){
        throw new AppError("Unauthorized!", 401)
    }

    return next()
}

export { verifyAuthorization }