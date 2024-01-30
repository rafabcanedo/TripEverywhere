import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { Accommodation } from './schemas/accommodation.schema';
import { CreateAccommodationDto } from './dto/create-accommodation.dto';
import { UpdateAccommodationDto } from './dto/update-accommodation.dto';
import { AccommodationService } from './accommodation.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('accommodation')
export class AccommodationController {
  constructor(private accommodationService: AccommodationService) {}

  @Get()
  async getAllUsers(@Query() query: ExpressQuery): Promise<Accommodation[]> {
    return this.accommodationService.findAll(query);
  }

  @Post()
  @UseGuards(AuthGuard())
  async createAccommodation(
    @Body()
    accommodation: CreateAccommodationDto,
    @Req() req,
  ): Promise<Accommodation> {
    return this.accommodationService.create(accommodation, req.user);
  }

  @Get(':id')
  async getAccomodation(
    @Param('id')
    id: string,
  ): Promise<Accommodation> {
    return this.accommodationService.findById(id);
  }

  @Put(':id')
  async updateAccommodation(
    @Param('id')
    id: string,
    @Body()
    accommodation: UpdateAccommodationDto,
  ): Promise<Accommodation> {
    return this.accommodationService.uptadeById(id, accommodation);
  }

  @Delete(':id')
  async deleteAccommodation(
    @Param('id')
    id: string,
  ): Promise<Accommodation> {
    return this.accommodationService.deleteById(id);
  }
}
