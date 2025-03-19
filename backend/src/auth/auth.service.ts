import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dtos/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from './dtos/register-user.dto';
import bcrypt from "bcryptjs"
import { hash, validate } from 'src/utils/hasher';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly users: Repository<User>,
        private readonly jwtService: JwtService
    ) {}
    
    async register(registerUserDto: RegisterUserDto) {
        const { username, password } = registerUserDto;

        const isfound = await this.users.findOne({
            where: {
                username
            }
        });

        if(isfound) {
            throw new ConflictException(`username ${username} already in use`);
        }

        const hashedPassword = await this.hashPassword(password);
        const user = this.users.create({
            username,
            password: hashedPassword,
            role: "user"
        });

        return this.users.save(user);
    }

    async login(loginUserDto: LoginUserDto) {
        const user = await this.users.findOne({
            where: {
                username: loginUserDto.username
            }
        });

        if(!user) {
            throw new UnauthorizedException(`Username or password incorrect`);
        }

        const hashedPassword = user.password;
        const issame = await this.validatePassword(loginUserDto.password, hashedPassword);

        if(!issame) {
            throw new UnauthorizedException(`Username or password incorrect`);
        }

        const payload = { sub: user.id };
        const accessToken = this.jwtService.sign(payload)
        
        return {
            user,
            accessToken
        }
    }

    verifyToken(token: string) {
        const payload = this.jwtService.decode<{ sub: number } | null>(token);
        return payload;
    }

    hashPassword(password: string) {
        return hash(password);
    }

    validatePassword(password: string, hashedPassword: string) {
        return validate(password, hashedPassword);
    }
}
