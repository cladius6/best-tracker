import { Injectable } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(username: string) {
    const user = new UserEntity();
    user.username = username;
    return await this.usersRepository.save(user);
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.usersRepository.find({
      relations: ['workouts'],
    });
  }

  async findOne(id: string): Promise<UserEntity> {
    return await this.usersRepository.findOne(id, {
      relations: ['workouts'],
    });
  }

  async delete(id: string) {
    return await this.usersRepository.delete(id);
  }
}
