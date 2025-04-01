import { BadRequestException, Body, Controller, Get, Param, ParseIntPipe, Post, Put, Req, UploadedFile, UseInterceptors } from "@nestjs/common";
import { UsersService } from "./users.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { Private } from "src/common/decorators/private.decorator";
import { User as CurrentUser } from "src/common/decorators/user.decorator";
import { User } from "./entities/user.entity";

@Controller("users")
export class UsersController {
    constructor(
        private readonly users: UsersService
    ) {}

    @Get("me")
    @Private()
    async getMe(
        @CurrentUser() user: User
    ) {
        return {
            user: user.toDTO()
        };
    }
    
    @Get(":username")
    async getByUsername(@Param("username") username: string) {
        const user = await this.users.findByUsername(username);
        return {
            user: user.toDTO()
        }
    }    

    @Get()
    async get() {
        const users = await this.users.find();
        return {
            users: users.map(user => user.toDTO())
        }
    }

    @Put(":id/pfp")
    @Private()
    @UseInterceptors(FileInterceptor("picture"))
    async updateProfilePicture(
        @UploadedFile() picture: Express.Multer.File,
        @CurrentUser() user: User
    ) {
        if(!picture) {
            throw new BadRequestException("Expected picture to be a file but found as null");
        }

        const updatedUser = await this.users.updateProfilePicture(user.id, picture);
        return {
            user: updatedUser.toDTO()
        }
    }
    
}