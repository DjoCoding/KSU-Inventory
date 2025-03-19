import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateWorkshopDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    location: string;

    @IsString()
    @IsOptional()
    description: string;
}
