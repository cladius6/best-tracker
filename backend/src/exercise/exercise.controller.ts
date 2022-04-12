import { Body, Controller, Get, Put } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseEntity } from './entity/exercise.entity';

@Controller('exercise')
export class ExerciseController {
  constructor(private exerciseService: ExerciseService) {}

  @Get('')
  async findAll(): Promise<ExerciseEntity[]> {
    return await this.exerciseService.findAll();
  }

  @Get('/:id')
  async findOne(@Body('id') id: string): Promise<ExerciseEntity> {
    return await this.exerciseService.findOne(id);
  }

  @Put('')
  async create(@Body() exercise) {
    return await this.exerciseService.create(exercise);
  }
}
