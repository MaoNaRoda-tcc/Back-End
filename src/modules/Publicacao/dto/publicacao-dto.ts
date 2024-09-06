import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class PublicacaoDto {
  @MinLength(11)
  @MaxLength(11)
  @IsNotEmpty()
  cpf: string;

  @MinLength(1)
  @MaxLength(50)
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  foto_url: string;
}
