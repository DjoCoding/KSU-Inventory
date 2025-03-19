import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
    constructor(
        private readonly users: UsersService
    ) {}

    @Get()
    async get() {
        const users = await this.users.find();
        return {
            users: users.map(user => user.toDTO())
        }
    }

    @Get(":username")
    async getByUsername(@Param("username") username: string) {
        const user = await this.users.findByUsername(username);
        return {
            user: user.toDTO()
        }
    }

}