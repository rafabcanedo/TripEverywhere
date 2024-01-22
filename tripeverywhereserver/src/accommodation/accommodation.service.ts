import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Accommodation } from './schemas/accommodation.schema';
import { Query } from 'express-serve-static-core';

@Injectable()
export class AccommodationService {
  constructor(
    @InjectModel(Accommodation.name)
    private accommodationModel: mongoose.Model<Accommodation>,
  ) {}

  async findAll(query: Query): Promise<Accommodation[]> {
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

    const accommodation = await this.accommodationModel
      .find({ ...keyword })
      .limit(resPerPage)
      .skip(skip);
    return accommodation;
  }

  async create(accommodation: Accommodation): Promise<Accommodation> {
    const result = await this.accommodationModel.create(accommodation);
    return result;
  }

  async findById(id: string): Promise<Accommodation> {
    const accommodation = await this.accommodationModel.findById(id);

    if (!accommodation) {
      throw new NotFoundException('Accommodation not found!');
    }

    return accommodation;
  }

  async uptadeById(id: string, users: Accommodation): Promise<Accommodation> {
    return await this.accommodationModel.findByIdAndUpdate(id, users, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Accommodation> {
    return await this.accommodationModel.findByIdAndDelete(id);
  }
}
