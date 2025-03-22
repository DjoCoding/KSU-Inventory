import { z } from "zod";
import { CreateWorkshopValidationSchema } from "../../../validation/workshops/create-workshop.validation";

export type CreateWorkshopData = z.infer<typeof CreateWorkshopValidationSchema>;

export interface CreateWorkshopState {
    name: string;
    location: string;
    description: string;
}

export interface CreateWorkshopValidationErrors {
    name: string;
    location: string;
    description: string;
} 