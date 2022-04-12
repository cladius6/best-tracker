import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { WorkoutModule } from '../workout/workout.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), WorkoutModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
