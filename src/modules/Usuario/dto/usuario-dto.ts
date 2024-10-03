import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UsuarioDto {
  @MinLength(11)
  @MaxLength(11)
  @IsNotEmpty()
  cpf: string;

  @MinLength(1)
  @MaxLength(100)
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNumber()
  @IsNotEmpty()
  idade: number
}
