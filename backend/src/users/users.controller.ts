import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Put('')
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() data: CreateUserDto) {
    return await this.userService.create(data.username);
  }

  @Get('')
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return await this.userService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    return await this.userService.delete(id);
  }
}
