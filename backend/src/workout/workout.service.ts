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

  async create(name: string, exerciseId?: string): Promise<WorkoutEntity> {
    const workout = new WorkoutEntity();
    workout.name = name;
    const exercise = await this.exerciseService.findOne(exerciseId);
    workout.exercises = [exercise];
    return await this.workoutRepository.save(workout);
  }

  async update(id: string, name: string): Promise<WorkoutEntity> {
    const workout = await this.workoutRepository.findOne(id);
    workout.name = name;
    return await this.workoutRepository.save(workout);
  }

  async findAll(): Promise<WorkoutEntity[]> {
    return await this.workoutRepository.find({ relations: ['exercises'] });
  }

  async findOne(id: string): Promise<WorkoutEntity> {
    return await this.workoutRepository.findOne(id, {
      relations: ['exercises'],
    });
  }
}
