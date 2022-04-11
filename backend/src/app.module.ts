import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import path from 'path';
import configuration from './config/configuration';
import { TypeOrmConfigService } from './typeorm/typeorm.config.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.resolve(__dirname, '../../.env.development'),
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      useClass: TypeOrmConfigService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
