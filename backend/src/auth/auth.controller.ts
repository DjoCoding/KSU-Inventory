import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dtos/login-user.dto';
import { RegisterUserDto } from './dtos/register-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post("register")
  async register(@Body() registerUserDto: RegisterUserDto) {
    const user = await this.authService.register(registerUserDto);
    return {
      user: user.toDTO()
    }
  }

  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto) {
    const { user, accessToken } = await this.authService.login(loginUserDto);
    return {
      user: user.toDTO(),
      accessToken
    };
  }
}
