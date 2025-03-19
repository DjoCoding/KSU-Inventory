import { applyDecorators, CanActivate, ExecutionContext, UseGuards } from "@nestjs/common";
import { AuthRequest } from "src/types/auth.req";

export class AdminGuard implements CanActivate {
    canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest<AuthRequest>();
        const user = req.user;
        return user.role === "admin";
    }
}

export default function Admin() {
    return applyDecorators(UseGuards(AdminGuard));
}