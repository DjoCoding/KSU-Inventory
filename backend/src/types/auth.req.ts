import { Request } from "express";
import { User } from "src/users/entities/user.entity";

export type AuthRequest<P = any, Res = any, Req = any, Q = any, Locals extends Record<string, any> = Record<string, string>> = Request<P, Res, Req, Q, Locals> & {
    user: User;
}