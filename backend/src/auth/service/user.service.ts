import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
  }

  async findByName(name: string) {
    return await this.userRepository.findOne({
      where: [
        {
          name,
        },
      ],
    });
  }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}
