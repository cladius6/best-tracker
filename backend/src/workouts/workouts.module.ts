import { Module } from '@nestjs/common';
import { WorkoutsController } from './workouts.controller';
import { WorkoutsService } from './workouts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutEntity } from './entity/workout.entity';
import { ExercisesModule } from '../exercises/exercises.module';

@Module({
  imports: [TypeOrmModule.forFeature([WorkoutEntity]), ExercisesModule],
  controllers: [WorkoutsController],
  providers: [WorkoutsService],
  exports: [WorkoutsService],
})
export class WorkoutsModule {}
