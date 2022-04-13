import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { UserEntity } from '../users/entity/user.entity';
import { ExerciseEntity } from '../exercises/entity/exercise.entity';
import { WorkoutEntity } from '../workouts/entity/workout.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    console.log(this.configService.get('database.url'));
    return {
      type: 'postgres',
      url: this.configService.get('database.url'),
      entities: [UserEntity, ExerciseEntity, WorkoutEntity],
      synchronize: true,
      keepConnectionAlive: true,
    };
  }
}
