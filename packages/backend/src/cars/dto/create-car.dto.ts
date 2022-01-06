import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCarDto {
  @IsNotEmpty()
  @IsString()
  vendor: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsNumber()
  year: number;

  @IsNotEmpty()
  @IsString()
  plate: string;
}
