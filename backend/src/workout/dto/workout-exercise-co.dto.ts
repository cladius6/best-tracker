import { IsNotEmpty, IsString } from 'class-validator';
import { IWorkoutExerciseCo } from '../interfaces/workout.interface';

export class WorkoutExerciseCoDto implements IWorkoutExerciseCo {
  @IsNotEmpty()
  @IsString()
  workoutId: string;

  @IsNotEmpty()
  @IsString()
  exerciseId: string;
}
