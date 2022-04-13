import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as path from 'path';
import configuration from './config/configuration';
import { TypeOrmConfigService } from './typeorm/typeorm.config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutModule } from './workout/workout.module';
import { UserModule } from './users/users.module';
import { ExerciseModule } from './exercise/exercise.module';
const env = process.env.NODE_ENV || 'development';
const dev = path.resolve(__dirname, `../../.env.development`);
const test = path.resolve(__dirname, `../../.env.test`);
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: env === 'test' ? test : dev,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      inject: [ConfigService],
      // useClass: TypeOrmConfigService,
      useFactory: (configService: ConfigService) => {
        return new TypeOrmConfigService(configService).createTypeOrmOptions();
      },
    }),
    WorkoutModule,
    UserModule,
    ExerciseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
