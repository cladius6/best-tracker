import { Module } from '@nestjs/common';
import { ExerciseController } from './exercise.controller';
import { ExerciseService } from './exercise.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseEntity } from './entity/exercise.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseEntity])],
  controllers: [ExerciseController],
  providers: [ExerciseService],
  exports: [ExerciseService],
})
export class ExerciseModule {}
