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
import { WorkoutsService } from './workouts.service';
import { WorkoutExerciseCoDto } from './dto/workout-exercise-co.dto';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { WorkoutEntity } from './entity/workout.entity';
import { FindOneWorkoutDto } from './dto/find-one-workout.dto';

@Controller('workouts')
export class WorkoutsController {
  constructor(private workoutService: WorkoutsService) {}

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

  @Post('exercises')
  @UsePipes(new ValidationPipe({ transform: true }))
  addExercise(@Body() data: WorkoutExerciseCoDto) {
    return this.workoutService.addExercise(data.workoutId, data.exerciseId);
  }

  @Delete('exercises')
  @UsePipes(new ValidationPipe({ transform: true }))
  removeExercise(@Body() data: WorkoutExerciseCoDto) {
    return this.workoutService.removeExercise(data.workoutId, data.exerciseId);
  }

  @Get('')
  async findAll(): Promise<WorkoutEntity[]> {
    return this.workoutService.findAll();
  }

  @Get(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async findOne(@Body() data: FindOneWorkoutDto): Promise<WorkoutEntity> {
    return this.workoutService.findOne(data.id);
  }
}
