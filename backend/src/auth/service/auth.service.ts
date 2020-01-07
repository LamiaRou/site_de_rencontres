import { Injectable } from '@nestjs/common';
import { User } from '../user';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService, private readonly jwtService: JwtService) {
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByName(email);
    if (user && (await this.passwordsAreEqual(user.password, pass))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  public async login(user: User): Promise<any | { status: number }> {
    return this.validateUser(user.email, user.password).then((userData) => {
      if (!userData) {
        return { status: 'not_found' };
      }
      const payload = { id: userData.id, email: userData.email };
      return {
        access_token: this.jwtService.sign(payload),
        user: userData,
      };
    });
  }

  private async passwordsAreEqual(hashedPassword: string, plainPassword: string): Promise<boolean> {
    return plainPassword === hashedPassword;
  }

  public async register(user: User): Promise<any> {
    return this.userService.create(user).then((userData) => {
      const payload = { id: userData.id, email: userData.email };
      return {
        access_token: this.jwtService.sign(payload),
        user: userData,
      };
    });
  }

  async getById(id: any) {
    return await this.userService.findById(id).then(result => {
      return result;
    });
  }
}
