import {
  IsDate,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class ModeloDto {
  @IsString()
  @MinLength(2)
  @MaxLength(40)
  @IsNotEmpty()
  modelo: string;

  @IsString()
  @IsNotEmpty()
  ano: Date;
}
