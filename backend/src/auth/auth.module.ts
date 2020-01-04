import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './service/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './service/user.service';
import { User } from './user';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, UserService],
})
export class AuthModule {
}
