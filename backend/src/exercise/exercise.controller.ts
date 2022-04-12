import { Body, Controller, Put } from '@nestjs/common';
import { ExerciseService } from './exercise.service';

@Controller('exercise')
export class ExerciseController {
  constructor(private exerciseService: ExerciseService) {}
  @Put('')
  async create(@Body() exercise) {
    return await this.exerciseService.create(exercise);
  }
}
