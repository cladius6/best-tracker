import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateWorkoutDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  newName: string;
}
