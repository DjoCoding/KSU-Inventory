import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "../../auth/auth.service";
import { UsersService } from "src/users/users.service";
import { Reflector } from "@nestjs/core";
import { IS_PRIVATE } from "src/constants";

@Injectable()
export class AuthGuard implements CanActivate {
    private readonly reflector: Reflector;
    
    constructor(
        private readonly usersService: UsersService,
        private readonly authService: AuthService
    ) {
        this.reflector = new Reflector();
    }
    
    async canActivate(context: ExecutionContext) {  
        const isprivate = this.reflector.get<boolean | null>(IS_PRIVATE, context.getHandler());
        if(!isprivate) { 
            return true;
        }

        const req = context.switchToHttp().getRequest<Request>();
        const token = this.extractTokenFromRequest(req);
        if(!token) { 
            throw new UnauthorizedException("Failed to find token");
        }

        const payload = this.authService.verifyToken(token);
        if(!payload) {
            throw new UnauthorizedException("Invalid token");
        }
        
        const { sub: id } = payload;

        const user = await this.usersService.findByID(id);
        req["user"] = user;

        return true;
    }

    extractTokenFromRequest(req: Request) {
        const authorization = req.headers.authorization
        if(!authorization) { return null; }
        if(!authorization.startsWith("Bearer")) { return null; }
        const [bearer, ...rest] = authorization.split(" ");
        if(rest.length != 1) { return null; }
        const token = rest[0];
        return token; 
    }
}