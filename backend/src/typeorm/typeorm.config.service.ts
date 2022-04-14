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
      name: process.env.NODE_ENV === 'test' ? 'test' : 'default',
      type: 'postgres',
      url: this.configService.get('database.url'),
      schema: 'public',

      synchronize: false,
      migrationsRun: true,

      logging: true,

      autoLoadEntities: true,

      entities: [UserEntity, ExerciseEntity, WorkoutEntity],
      migrations: ['../migrations/*.ts'],
      migrationsTableName: 'migrations',
      cli: {
        migrationsDir: 'src/migrations',
        entitiesDir: 'src/**/entity',
      },
    };
  }
}
