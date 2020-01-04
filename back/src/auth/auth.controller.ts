import { Controller, Post, Request } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Post('login')
    async login(@Request() req) {
      return 'login';
    }

    @Post('register')
    async register(@Request() req) {
      return 'register';
    }
}
