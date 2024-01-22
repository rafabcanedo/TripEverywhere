export class UpdateAccommodationDto {
  readonly name: string;
  readonly description: string;
  readonly address: string;
  readonly regularPrice: number;
  readonly discountPrice: number;
  readonly bathrooms: number;
  readonly bedrooms: number;
  readonly furnished: boolean;
  readonly type: number;
  readonly offer: number;
  // readonly image: [];
}
