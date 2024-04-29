import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class EngineDto {
  @IsString()
  @MinLength(2)
  @MaxLength(40)
  name: string;

  @IsNumber()
  displacement: number;

  @IsNumber()
  horsepower: number;

  @IsNumber()
  torque: number;
}
