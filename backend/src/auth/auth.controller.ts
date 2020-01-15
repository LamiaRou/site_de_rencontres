import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async Login(@Req() req): Promise<any> {
    return await this.authService.login(req.body);
  }

  @Post('register')
  async register(@Req() req): Promise<any> {
    return await this.authService.register(req.body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('user')
  async getUser(@Req() req): Promise<any> {
    console.log(req.user);
    return await this.authService.getById(req.user.id);
  }

  @Post('profile')
  async getProfile(@Req() req): Promise<any> {
    console.log(req.body.id);
    return await this.authService.getById(req.body.id);
  }

  @Post('maill')
  async getEmail(@Req() req): Promise<any> {
    console.log(req.body.email);
    return await this.authService.getByEmail(req.body.email);
  }
}
