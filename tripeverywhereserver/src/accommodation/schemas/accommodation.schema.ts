import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../../auth/schemas/user.schema';
import mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class Accommodation {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  address: string;

  @Prop()
  regularPrice: number;

  @Prop()
  discountPrice: number;

  @Prop()
  bathrooms: number;

  @Prop()
  bedrooms: number;

  @Prop()
  furnished: boolean;

  @Prop()
  type: number;

  @Prop()
  offer: number;

  // @Prop()
  //imageUrls: array[],

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const accommodationSchema = SchemaFactory.createForClass(Accommodation);
