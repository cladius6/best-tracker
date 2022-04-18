import { ICreateExercise } from '../interfaces/exercise.interface';
import { Muscle } from '../enum/muscle.enum';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateExerciseDto implements ICreateExercise {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsString()
  image: string;

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
