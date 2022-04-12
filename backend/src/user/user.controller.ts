import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Put('')
  async create(@Body('username') username: string) {
    return await this.userService.create(username);
  }

  @Post('workout')
  async bindWorkout(@Body() data) {
    return await this.userService.bindWorkout(data.userId, data.workoutId);
  }

  @Get('')
  async findAll() {
    return await this.userService.findAll();
  }
}
