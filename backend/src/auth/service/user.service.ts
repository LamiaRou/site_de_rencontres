import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
  }

  async findByName(email: string) {
    return await this.userRepository.findOne({
      where: [
        {
          email,
        },
      ],
    });
  }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async findById(id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        id,
      },
    });
  }
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
  async findByEmail(email: any) {
    return await this.userRepository.findOne({
      where: {
        email,
      },
    });
  }

  async setImage(str: string | string[], id: number) {
    let user;
    await this.findById(id).then(value => {
      user = value;
    });
    user.image = str;
    return await this.userRepository.save(user);
  }
}
