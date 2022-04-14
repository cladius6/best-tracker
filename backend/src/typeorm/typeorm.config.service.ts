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
    let env = process.env.NODE_ENV;

    if (env === 'test') {
      return {
        name: 'test',
        type: 'postgres',
        url: this.configService.get('database.url'),
        schema: 'public',

        synchronize: false,
        migrationsRun: true,
        logging: true,
        autoLoadEntities: true,

        entities: ['./src/**/entity/*.entity.{ts, js}'],
        migrationsTableName: 'migrations',
        migrations: ['./src/migrations/*.{ts, js}'],
        cli: {
          migrationsDir: './dist/migrations',
          entitiesDir: './dist/**/entity/*.entity.{ts, js}',
        },
      };
    } else {
      return {
        name: 'default',
        type: 'postgres',
        url: this.configService.get('database.url'),
        schema: 'public',

        synchronize: false,
        migrationsRun: true,
        logging: true,
        autoLoadEntities: true,

        entities: [UserEntity, ExerciseEntity, WorkoutEntity],
        migrationsTableName: 'migrations',
        cli: {
          migrationsDir: './src/migrations',
        },
      };
    }
  }
}
