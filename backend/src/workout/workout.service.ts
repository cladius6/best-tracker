import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkoutEntity } from './entity/workout.entity';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(WorkoutEntity)
    private workoutRepository: Repository<WorkoutEntity>,
  ) {}

  async create(workout: WorkoutEntity): Promise<WorkoutEntity> {
    return await this.workoutRepository.save(workout);
  }

  async findAll(): Promise<WorkoutEntity[]> {
    return await this.workoutRepository
      .createQueryBuilder('workout')
      .leftJoinAndSelect('workout.exercises', 'exercise')
      .getMany();
  }

  // Add exercise to workout
}
