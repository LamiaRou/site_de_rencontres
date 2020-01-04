import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './service/auth.service';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {
  }

  @Post('login')
  async Login(@Req() req): Promise<any> {
    return await this.authService.login(req.body);
  }

  @Post('register')
  async register(@Req() req): Promise<any> {
    return await this.authService.register(req.body);
  }

}
