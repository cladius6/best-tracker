import { Body, Controller, Put } from '@nestjs/common';
import { WorkoutService } from './workout.service';

@Controller('workout')
export class WorkoutController {
  constructor(private workoutService: WorkoutService) {}

  @Put('')
  async create(@Body() workout) {
    return this.workoutService.create(workout);
  }
}
