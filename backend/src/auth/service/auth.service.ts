import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService) {
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findByName(username);
    if (user && (await this.passwordsAreEqual(user.password, pass))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  public async login(user: User): Promise<any | { status: number }> {
    return this.validateUser(user.name, user.password).then((userData) => {
      if (!userData) {
        return { status: 'not found' };
      }
      return userData;
    });
  }

  private async passwordsAreEqual(hashedPassword: string, plainPassword: string): Promise<boolean> {
    return plainPassword === hashedPassword;
  }

  public async register(user: User): Promise<any> {
    return this.userService.create(user);
  }
}
