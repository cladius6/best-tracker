import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Put('')
  async create(@Body('username') username: string) {
    return await this.userService.create(username);
  }

  @Post('workouts')
  async addWorkout(@Body() data) {
    return await this.userService.bindWorkout(data.userId, data.workoutId);
  }

  @Get('')
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return await this.userService.findOne(id);
  }
}
