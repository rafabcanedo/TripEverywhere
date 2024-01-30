import {
  IsBoolean,
  IsEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { User } from '../../auth/schemas/user.schema';

export class UpdateAccommodationDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsString()
  readonly address: string;

  @IsOptional()
  @IsNumber()
  readonly regularPrice: number;

  @IsOptional()
  @IsNumber()
  readonly discountPrice: number;

  @IsOptional()
  @IsNumber()
  readonly bathrooms: number;

  @IsOptional()
  @IsNumber()
  readonly bedrooms: number;

  @IsOptional()
  @IsBoolean()
  readonly furnished: boolean;

  @IsOptional()
  @IsNumber()
  readonly type: number;

  @IsOptional()
  @IsNumber()
  readonly offer: number;

  // readonly image: [];

  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
}
