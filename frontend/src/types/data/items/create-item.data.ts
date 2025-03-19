import { z } from "zod";
import { CreateItemValidationSchema } from "../../../validation/items/create-item.validation";

export interface CreateItemValidationError {
    name: string;
    location: string;
    pictures: string;
    description: string;
    workshop: string;   
}

export type CreateItemState = z.infer<typeof CreateItemValidationSchema>

export interface CreateItemData {
    data: FormData;
}