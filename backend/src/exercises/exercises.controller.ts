import {
  Body,
  Controller,
  Get,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExerciseEntity } from './entity/exercise.entity';
import { CreateExerciseDto } from './dto/create-exercise.dto';

@Controller('exercises')
export class ExercisesController {
  constructor(private exerciseService: ExercisesService) {}

  @Get('')
  async findAll(): Promise<ExerciseEntity[]> {
    return await this.exerciseService.findAll();
  }

  @Get('/:id')
  async findOne(@Body('id') id: string): Promise<ExerciseEntity> {
    return await this.exerciseService.findOne(id);
  }

  @Put('')
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() data: CreateExerciseDto) {
    return await this.exerciseService.create(data);
  }
}
