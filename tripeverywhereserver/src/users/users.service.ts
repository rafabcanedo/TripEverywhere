import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Users } from './schemas/users.schema';
import { Query } from 'express-serve-static-core';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name)
    private usersModel: mongoose.Model<Users>,
  ) {}

  async findAll(query: Query): Promise<Users[]> {
    const resPerPage = 2;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? {
          name: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};

    const users = await this.usersModel
      .find({ ...keyword })
      .limit(resPerPage)
      .skip(skip);
    return users;
  }

  async create(users: Users): Promise<Users> {
    const result = await this.usersModel.create(users);
    return result;
  }

  async findById(id: string): Promise<Users> {
    const users = await this.usersModel.findById(id);

    if (!users) {
      throw new NotFoundException('Users not found!');
    }

    return users;
  }

  async uptadeById(id: string, users: Users): Promise<Users> {
    return await this.usersModel.findByIdAndUpdate(id, users, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Users> {
    return await this.usersModel.findByIdAndDelete(id);
  }
}
