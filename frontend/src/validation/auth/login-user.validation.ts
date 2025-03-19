import { z } from "zod";

export const LoginUserValidationSchema = z.object({
    username: z.string().min(3, "Username length must be above 3 chars").max(20, "Username length must be less than 20 chars"),
    password: z.string().min(8, "Password length must be above 8 chars")
});