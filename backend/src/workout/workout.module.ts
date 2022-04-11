import { Module } from '@nestjs/common';
import { WorkoutController } from './workout.controller';

@Module({
  controllers: [WorkoutController]
})
export class WorkoutModule {}
