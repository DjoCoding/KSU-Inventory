import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { CloudinaryModule } from "src/cloudinary/cloudinary.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        CloudinaryModule
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule {};