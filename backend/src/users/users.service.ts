import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly users: Repository<User>
    ) {}

    async find() {
        return this.users.find();
    }

    async findByUsername(username: string) {
        const user = await this.users.findOne({
            where: {
                username
            }
        });

        if(!user) {
            throw new NotFoundException(`user:${username} not found`);
        }

        return user;
    }

    async findByID(id: number) {
        const user = await this.users.findOne({
            where: {
                id
            }
        });

        if(!user) {
            throw new NotFoundException(`user:${id} not found`);
        }

        return user;
    }
}