import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { WorkoutsModule } from '../workouts/workouts.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), WorkoutsModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {}
