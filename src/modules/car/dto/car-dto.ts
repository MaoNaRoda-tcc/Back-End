import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CarDto {
  @IsString()
  @MinLength(2)
  @MaxLength(40)
  model: string;

  @IsNumber()
  @Min(1)
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  engineId: number;
}
