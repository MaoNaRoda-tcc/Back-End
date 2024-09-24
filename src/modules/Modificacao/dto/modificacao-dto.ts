import {
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';

export class ModificacaoDto {
  @MinLength(8)
  @MaxLength(8)
  @IsNotEmpty()
  placa: string;

  @MinLength(1)
  @MaxLength(100)
  @IsNotEmpty()
  motor: string;

  @MinLength(1)
  @MaxLength(100)
  @IsNotEmpty()
  freio: string;

  @MinLength(1)
  @MaxLength(100)
  @IsNotEmpty()
  suspensao: string;

  @MinLength(1)
  @MaxLength(100)
  @IsNotEmpty()
  cambio: string;

  @MinLength(1)
  @MaxLength(100)
  @IsNotEmpty()
  interno: string;

  @MinLength(1)
  @MaxLength(100)
  @IsNotEmpty()
  externo: string;

  @MinLength(1)
  @MaxLength(100)
  @IsNotEmpty()
  escapamento: string;
}
