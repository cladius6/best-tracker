import { Body, Controller, Get, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Put('')
  async create(@Body('username') username: string) {
    return await this.userService.create(username);
  }

  @Get('')
  async findAll() {
    return await this.userService.findAll();
  }
}
