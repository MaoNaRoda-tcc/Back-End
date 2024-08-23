import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class GaragemDto {
  @MinLength(11)
  @MaxLength(11)
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @MaxLength(8)
  @IsNotEmpty()
  placa: string;

  @IsNumber()
  @IsNotEmpty()
  idModelo: number;
}
