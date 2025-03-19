import { z } from "zod";
import { LoginUserValidationSchema } from "../../../validation/auth/login-user.validation";

export type LoginUserData = z.infer<typeof LoginUserValidationSchema>;
export type LoginUserDataValidationError = {
    username: string;
    password: string;
}