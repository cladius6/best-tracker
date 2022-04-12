import {
  Body,
  Controller,
  Get,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseEntity } from './entity/exercise.entity';
import { CreateExerciseDto } from './dto/create-exercise.dto';

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
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() data: CreateExerciseDto) {
    return await this.exerciseService.create(data as ExerciseEntity);
  }
}
