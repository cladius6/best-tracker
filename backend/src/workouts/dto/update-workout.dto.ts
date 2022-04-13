import { IsNotEmpty, IsString } from 'class-validator';
import { IUpdateWorkout } from '../interfaces/workout.interface';

export class UpdateWorkoutDto implements IUpdateWorkout {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  newName: string;
}
