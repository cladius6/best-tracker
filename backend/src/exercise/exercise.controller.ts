import { Body, Controller, Get, Put } from '@nestjs/common';
import { ExerciseService } from './exercise.service';

@Controller('exercise')
export class ExerciseController {
  constructor(private exerciseService: ExerciseService) {}

  @Get('')
  async findAll(): Promise<any> {
    return await this.exerciseService.findAll();
  }

  @Put('')
  async create(@Body() exercise) {
    return await this.exerciseService.create(exercise);
  }
}
