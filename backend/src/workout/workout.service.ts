import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkoutEntity } from './entity/workout.entity';
import { DeepPartial, Repository, UpdateResult } from 'typeorm';
import { ExerciseEntity } from '../exercise/entity/exercise.entity';
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

  async addExercise(
    workoutId: string,
    exerciseId: string,
  ): Promise<WorkoutEntity> {
    const workout = await this.findOne(workoutId);
    const exercise = await this.exerciseService.findOne(exerciseId);
    // console.log(workout);
    // for (const [key, value] of Object.entries(exercise)) {
    //   console.log(workout[key]);
    //   workout['exercises'] = value;
    // }
    // console.log(workout);
    // Add exercise to existing exercise objects
    console.log(exercise);
    console.log(workout);
    const newExercises = {
      ...workout.exercises,
      [exercise.id]: exercise,
    };
    console.log(newExercises);
    const newWorkout = {
      name: workout.name,
      exercises: newExercises,
    };
    return await this.workoutRepository.save(newWorkout);
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
