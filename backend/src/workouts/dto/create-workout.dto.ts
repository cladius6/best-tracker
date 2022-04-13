import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ICreateWorkout } from '../interfaces/workout.interface';

export class CreateWorkoutDto implements ICreateWorkout {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  exerciseId: string;
}
