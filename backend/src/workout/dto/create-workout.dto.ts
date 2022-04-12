import { IExercise } from '../../exercise/interfaces/exercise.interface';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateWorkoutDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  exercises?: IExercise[];
}
