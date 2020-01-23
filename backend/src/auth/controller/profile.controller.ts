import { Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { editFileName, imageFileFilter } from '../utility/utility';
import { diskStorage } from 'multer';
import * as fs from 'fs';

@Controller('profile')
export class ProfileController {
  constructor(private readonly authService: AuthService, private userService: UserService) {
  }

  @Get('one/:id')
  async getProfile(@Param('id') id): Promise<any> {
    console.log(id);
    return await this.authService.getById(id);
  }

  @Get('all')
  async getProfiles(): Promise<any> {
    return await this.userService.findAll();
  }

  @Post('one/:id')
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
