import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as path from 'path';
import configuration from './config/configuration';
import { TypeOrmConfigService } from './typeorm/typeorm.config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutsModule } from './workouts/workouts.module';
import { UserModule } from './users/users.module';
import { ExercisesModule } from './exercises/exercises.module';
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
    WorkoutsModule,
    UserModule,
    ExercisesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
