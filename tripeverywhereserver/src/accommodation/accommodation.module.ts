import { Module } from '@nestjs/common';
import { AccommodationController } from './accommodation.controller';
import { AccommodationService } from './accommodation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { accommodationSchema } from './schemas/accommodation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Accommodation', schema: accommodationSchema },
    ]),
  ],
  controllers: [AccommodationController],
  providers: [AccommodationService],
})
export class AccommodationModule {}
