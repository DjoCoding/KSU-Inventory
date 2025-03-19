import { ArgumentsHost, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Response } from "express";

export class GloabalExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const res = host.switchToHttp().getResponse<Response>();
        
        if(exception instanceof HttpException) {
            const { cause, message } = exception;
            const code = exception.getStatus();
            return res.status(code).json({
                status: "error",
                message,
                cause
            });
        }

        console.log(exception);
        
        return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({
            status: "error",
            message: "Internal server error"
        })
    }
}