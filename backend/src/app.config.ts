import { Injectable } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ConfigService } from '@nestjs/config';
import { Expose } from 'class-transformer';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { NodeEnvironment } from './config/node-env.enum';
import { ConfigValidator } from './config/config.validator';

export class AppEnvVariables {
  @IsEnum(NodeEnvironment)
  @Expose()
  NODE_ENV!: NodeEnvironment;

  @IsNumber()
  @Expose()
  API_PORT!: number;

  @IsString()
  @Expose()
  API_ALLOWED_ORIGINS!: string;

  @IsString()
  @Expose()
  DATABASE_URL!: string;
}

@Injectable()
export class AppConfig {
  readonly port: number;
  readonly corsOptions: CorsOptions;
  readonly databaseUrl: string;
  readonly nodeEnv: string;
  readonly version!: string;

  constructor(configService: ConfigService<AppEnvVariables>) {
    const config = ConfigValidator.validate(AppEnvVariables, {
      API_ALLOWED_ORIGINS: configService.get('API_ALLOWED_ORIGINS'),
      API_PORT: configService.get('API_PORT'),
      NODE_ENV: configService.get('NODE_ENV'),
      DATABASE_URL: configService.get('DATABASE_URL'),
    });

    this.version = process.env.npm_package_version!;

    this.nodeEnv = config.NODE_ENV;

    this.port = config.API_PORT;

    const allowedOrigins = config.API_ALLOWED_ORIGINS.split(',');

    this.corsOptions = {
      origin: allowedOrigins,
    };

    this.databaseUrl = config.DATABASE_URL;
  }
}
