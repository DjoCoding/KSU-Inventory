import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly users: Repository<User>,
        private readonly cloudinary: CloudinaryService
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

    async updateProfilePicture(id: number, picture: Express.Multer.File) {
        const user = await this.users.findOne({
            where: { id }
        });

        if(!user) {
            throw new NotFoundException(`User #${id} not found`);
        }

        const url: string = await this.cloudinary.uploadImage(picture);
        user.profile_pic = url;

        return this.users.save(user);
    }
}