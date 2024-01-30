import {
  IsBoolean,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { User } from '../../auth/schemas/user.schema';

export class CreateAccommodationDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;
  readonly address: string;

  @IsNotEmpty()
  @IsNumber()
  readonly regularPrice: number;

  @IsNotEmpty()
  @IsNumber()
  readonly discountPrice: number;

  @IsNotEmpty()
  @IsNumber()
  readonly bathrooms: number;

  @IsNotEmpty()
  @IsNumber()
  readonly bedrooms: number;

  @IsNotEmpty()
  @IsBoolean()
  readonly furnished: boolean;

  @IsNotEmpty()
  @IsNumber()
  readonly type: number;

  @IsNotEmpty()
  @IsNumber()
  readonly offer: number;

  // readonly image: [];

  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
}
