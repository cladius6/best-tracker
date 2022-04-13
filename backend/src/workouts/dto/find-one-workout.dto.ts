import { IsNotEmpty, IsString } from 'class-validator';

export class FindOneWorkoutDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}
