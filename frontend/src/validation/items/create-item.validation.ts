import { z } from "zod";

export const CreateItemValidationSchema = z.object({
    name: z.string().min(3, "Name length must be at least 3").max(20, "Name length must be at most 20"),
    location: z.string().nonempty(),
    description: z.string(),
    pictures: z.array(z.instanceof(File)),
    workshop: z.string().nonempty()
});