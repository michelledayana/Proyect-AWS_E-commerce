import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}