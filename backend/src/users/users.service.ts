import { Injectable } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkoutsService } from '../workouts/workouts.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    private workoutService: WorkoutsService,
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

  async bindWorkout(userId: string, workoutId: string) {
    const user = await this.usersRepository.findOne(userId, {
      relations: ['workouts'],
    });
    const workout = await this.workoutService.findOne(workoutId);
    user.workouts.push(workout);
    return await this.usersRepository.save(user);
  }

  async delete(id: string) {
    return await this.usersRepository.delete(id);
  }
}
