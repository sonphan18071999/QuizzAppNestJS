import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import {ResponseDto} from "../../shared/DTOs/response.dto";
import {UserDto} from "../../shared/DTOs/user.dto";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService :AuthService
    ) {}

    @Post('register')
    public async register(@Body() user: UserDto):Promise<ResponseDto<boolean>> {
        const registered = await this.authService.register(user);
        return new ResponseDto<boolean>(200, 'Login successful', registered);
    }
}
