import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { UserEntity } from '../users/entity/user.entity';
import { ExerciseEntity } from '../exercises/entity/exercise.entity';
import { WorkoutEntity } from '../workouts/entity/workout.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'postgres',
      url: this.configService.get('database.url'),
      entities: [UserEntity, ExerciseEntity, WorkoutEntity],
      migrationsRun: true,
      synchronize: false,
      migrationsTableName: 'migrations',
    };
  }
}
