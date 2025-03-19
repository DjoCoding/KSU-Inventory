import { IsArray, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateItemRequestBodyDto {
    @IsString()
    @MinLength(3)
    name: string;

    @IsString()
    @IsNotEmpty()
    location: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    @IsNotEmpty()
    workshop: string;
}
export class CreateItemDto {
    name: string;
    location: string;
    description: string;
    workshop: string;
    pictures: Express.Multer.File[];
}
