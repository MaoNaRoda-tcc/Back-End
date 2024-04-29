import { IsNumber, IsString, MaxLength, Min, MinLength } from 'class-validator';

export class EngineDto {
  @IsString()
  @MinLength(2)
  @MaxLength(40)
  name: string;

  @IsNumber()
  @Min(1)
  displacement: number;

  @IsNumber()
  horsepower: number;

  @IsNumber()
  torque: number;
}
