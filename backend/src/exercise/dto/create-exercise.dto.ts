import { IExercise } from '../interfaces/exercise.interface';
import { Muscle } from '../enum/muscle.enum';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateExerciseDto implements IExercise {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsEnum(Muscle)
  muscle: Muscle;

  @IsEnum(Muscle)
  muscleSecondary: Muscle;

  @IsNotEmpty()
  @IsString()
  level: string;

  @IsNotEmpty()
  @IsString()
  type: string;
}
