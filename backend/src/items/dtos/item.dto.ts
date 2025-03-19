import { WorkshopDto } from "src/workshop/dto/workshop.dto";

export class ItemDto {
    id: number;
    name: string;
    location: string;
    description: string;
    pictures: string[];
    workshopID?: number;
    workshop?: WorkshopDto;
}