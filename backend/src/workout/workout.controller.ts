import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { WorkoutExerciseCoDto } from './dto/workout-exercise-co.dto';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';

@Controller('workout')
export class WorkoutController {
  constructor(private workoutService: WorkoutService) {}

  @Put('')
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() data: CreateWorkoutDto) {
    return this.workoutService.create(data.name, data.exerciseId);
  }

  @Post('')
  @UsePipes(new ValidationPipe({ transform: true }))
  update(@Body() data: UpdateWorkoutDto) {
    return this.workoutService.update(data.id, data.newName);
  }

  @Post('exercise')
  @UsePipes(new ValidationPipe({ transform: true }))
  addExercise(@Body() data: WorkoutExerciseCoDto) {
    return this.workoutService.addExercise(data.workoutId, data.exerciseId);
  }

  @Delete('exercise')
  @UsePipes(new ValidationPipe({ transform: true }))
  removeExercise(@Body() data: WorkoutExerciseCoDto) {
    return this.workoutService.removeExercise(data.workoutId, data.exerciseId);
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
