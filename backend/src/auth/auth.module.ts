import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './service/user.service';
import { User } from './model/user';
import { JwtStrategy } from './service/jwt-strategy/jwt-strategy.service';
import { LocalStrategy } from './service/local-strategy/local-strategy.service';
import { jwtConstants } from './service/jwt-strategy/jwt.constants';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ProfileController } from './controller/profile.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forFeature([User])],
  controllers: [AuthController, ProfileController],
  providers: [AuthService, UserService, LocalStrategy, JwtStrategy],
})
export class AuthModule {
}
