import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkoutEntity } from './entity/workout.entity';
import { Repository } from 'typeorm';
import { ExerciseService } from '../exercise/exercise.service';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(WorkoutEntity)
    private workoutRepository: Repository<WorkoutEntity>,
    private exerciseService: ExerciseService,
  ) {}

  async create(workout: WorkoutEntity): Promise<WorkoutEntity> {
    return await this.workoutRepository.save(workout);
  }

  async findAll(): Promise<WorkoutEntity[]> {
    return await this.workoutRepository
      .createQueryBuilder('workout')
      .innerJoinAndSelect('workout.exercises', 'exercise')
      .getMany();
  }

  async findOne(id: string): Promise<WorkoutEntity> {
    return await this.workoutRepository
      .createQueryBuilder('workout')
      .innerJoinAndSelect('workout.exercises', 'exercise')
      .where('workout.id = :id', { id })
      .getOne();
  }
}
