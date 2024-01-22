import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { UsersService } from './users.service';
import { Users } from './schemas/users.schema';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers(@Query() query: ExpressQuery): Promise<Users[]> {
    return this.usersService.findAll(query);
  }

  @Post()
  async createUsers(
    @Body()
    users: CreateUsersDto,
  ): Promise<Users> {
    return this.usersService.create(users);
  }

  @Get(':id')
  async getUsers(
    @Param('id')
    id: string,
  ): Promise<Users> {
    return this.usersService.findById(id);
  }

  @Put(':id')
  async updateUsers(
    @Param('id')
    id: string,
    @Body()
    users: UpdateUsersDto,
  ): Promise<Users> {
    return this.usersService.uptadeById(id, users);
  }

  @Delete(':id')
  async deleteUsers(
    @Param('id')
    id: string,
  ): Promise<Users> {
    return this.usersService.deleteById(id);
  }
}
