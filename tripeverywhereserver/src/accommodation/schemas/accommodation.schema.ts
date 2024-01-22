import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

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
}

export const accommodationSchema = SchemaFactory.createForClass(Accommodation);
