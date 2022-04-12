import { IsNotEmpty, IsString } from 'class-validator';

export class WorkoutExerciseCoDto {
  @IsNotEmpty()
  @IsString()
  workoutId: string;

  @IsNotEmpty()
  @IsString()
  exerciseId: string;
}
