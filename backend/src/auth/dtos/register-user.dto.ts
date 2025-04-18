import { IsString, MaxLength, MinLength } from "class-validator";

export class RegisterUserDto {
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(8)
    password: string;
}