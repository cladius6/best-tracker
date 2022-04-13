import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { WorkoutModule } from '../workout/workout.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), WorkoutModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {}
