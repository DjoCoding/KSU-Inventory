import { IsArray, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateItemRequestBodyDto {
    @IsString()
    @IsOptional()
    @MinLength(3)
    name?: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    location?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    workshop?: string;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    prevImages?: string[];
}

export class UpdateItemDto {
    name?: string;
    location?: string;
    description?: string;
    workshop?: string;
    prevImages?: string[];
    pictures?: Express.Multer.File[]
}