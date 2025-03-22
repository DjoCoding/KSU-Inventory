import { z } from "zod";

export const CreateWorkshopValidationSchema = z.object({
    name: z.string().nonempty().min(3, "Name length must be at least 3").max(20, "Name length must be at most 20"),
    location: z.string().nonempty(),
    description: z.string()
});