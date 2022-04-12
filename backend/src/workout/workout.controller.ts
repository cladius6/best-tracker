import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { WorkoutService } from './workout.service';

@Controller('workout')
export class WorkoutController {
  constructor(private workoutService: WorkoutService) {}

  @Put('')
  async create(@Body() data) {
    return this.workoutService.create(data.name, data.exerciseId);
  }

  @Post('')
  update(@Body() data) {
    return this.workoutService.update(data.id, data.name);
  }

  @Get('')
  async findAll() {
    return this.workoutService.findAll();
  }

  @Get(':id')
  async findOne(@Body() id) {
    return this.workoutService.findOne(id);
  }
}
