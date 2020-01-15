import { Controller, Get, Post, Req, UseGuards, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as fs from 'fs';
import { extname } from 'path';
import { UserService } from './service/user.service';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService, private userService: UserService) {
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

  @Get('getProfiles')
  async getProfiles(): Promise<any> {
    return await this.userService.findAll();
  }


  @Post('maill')
  async getEmail(@Req() req): Promise<any> {
    console.log(req.body.email);
    return await this.authService.getByEmail(req.body.email);
  }

  @Post('set/:id')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadedFile(@UploadedFile() file, @Param('id') id) {
    await fs.readFile(file.path, 'binary', (err, data) => {
      const str = Buffer.from(data, 'binary').toString('base64');
      this.userService.setImage(str, id);
    });
    return {
      originalname: file.originalname,
      filename: file.filename,
    };
  }
}


export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(new Error('Only controller files are allowed!'), false);
  }
  callback(null, true);
};

export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  callback(null, `${name}-${randomName}${fileExtName}`);
};