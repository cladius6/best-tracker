import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExerciseEntity } from './entity/exercise.entity';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(ExerciseEntity)
    private exercisesRepository: Repository<ExerciseEntity>,
  ) {}

  async create(exercise: ExerciseEntity): Promise<ExerciseEntity> {
    return await this.exercisesRepository.save(exercise);
  }

  async findAll(): Promise<ExerciseEntity[]> {
    return await this.exercisesRepository.find();
  }

  async findOne(id: string): Promise<ExerciseEntity> {
    return await this.exercisesRepository.findOne(id);
  }
}
