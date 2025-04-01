import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { AuthRequest } from "src/types/auth.req";

export const User = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const req = ctx.switchToHttp().getRequest() as AuthRequest;
        return req.user;
    }
)