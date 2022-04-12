import { Module } from '@nestjs/common';
import { WorkoutController } from './workout.controller';
import { WorkoutService } from './workout.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutEntity } from './entity/workout.entity';
import { ExerciseModule } from '../exercise/exercise.module';

@Module({
  imports: [TypeOrmModule.forFeature([WorkoutEntity]), ExerciseModule],
  controllers: [WorkoutController],
  providers: [WorkoutService],
  exports: [WorkoutService],
})
export class WorkoutModule {}
