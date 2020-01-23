import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { AuthGuard } from '@nestjs/passport';

import * as fs from 'fs';
import { UserService } from '../service/user.service';
import { UserLogin } from '../model/user-login';
import { UserRegister } from '../model/user-register';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService, private userService: UserService) {
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async Login(@Body() userLogin: UserLogin): Promise<any> {
    return await this.authService.login(userLogin);
  }

  @Post('register')
  async register(@Body() userRegister: UserRegister): Promise<any> {
    await fs.readFile('./files/empty_profile.jpg', 'binary', (err, data) => {
      const str = Buffer.from(data, 'binary').toString('base64');
      userRegister.image = str;
    });
    return await this.authService.register(userRegister);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('user')
  async getUser(@Req() req): Promise<any> {
    console.log(req.user);
    return await this.authService.getById(req.user.id);
  }

  @Get('login/:email')
  async getEmail(@Param('email') email): Promise<any> {
    console.log(email);
    return await this.authService.getByEmail(email);
  }

}
