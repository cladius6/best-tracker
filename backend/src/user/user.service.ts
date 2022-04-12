import { Injectable } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(username: string) {
    const user = new UserEntity();
    user.username = username;
    return await this.usersRepository.save(user);
  }
}
