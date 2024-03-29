import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkoutEntity } from './entity/workout.entity';
import { Repository } from 'typeorm';
import { ExercisesService } from '../exercises/exercises.service';

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectRepository(WorkoutEntity)
    private workoutRepository: Repository<WorkoutEntity>,
    private exerciseService: ExercisesService,
  ) {}

  async create(name: string, exerciseId?: string): Promise<WorkoutEntity> {
    const workout = new WorkoutEntity();
    workout.name = name;
    if (!(exerciseId === undefined)) {
      const exercise = await this.exerciseService.findOne(exerciseId);
      workout.exercises = [exercise];
      return await this.workoutRepository.save(workout);
    }
    return await this.workoutRepository.save(workout);
  }

  async update(id: string, name: string): Promise<WorkoutEntity> {
    const workout = await this.workoutRepository.findOne(id);
    workout.name = name;
    return await this.workoutRepository.save(workout);
  }

  async addExercise(
    workoutId: string,
    exerciseId: string,
  ): Promise<WorkoutEntity> {
    const workout = await this.workoutRepository.findOne(workoutId, {
      relations: ['exercises'],
    });
    const exercise = await this.exerciseService.findOne(exerciseId);
    workout.exercises.push(exercise);
    return await this.workoutRepository.save(workout);
  }

  async removeExercise(
    workoutId: string,
    exerciseId: string,
  ): Promise<WorkoutEntity> {
    const workout = await this.workoutRepository.findOne(workoutId, {
      relations: ['exercises'],
    });
    const exercise = await this.exerciseService.findOne(exerciseId);
    workout.exercises = workout.exercises.filter((ex) => ex.id !== exercise.id);
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
