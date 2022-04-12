import { Module } from '@nestjs/common';
import { WorkoutController } from './workout.controller';
import { WorkoutService } from './workout.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutEntity } from './entity/workout.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkoutEntity])],
  controllers: [WorkoutController],
  providers: [WorkoutService],
})
export class WorkoutModule {}
