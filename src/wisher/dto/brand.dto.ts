import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsInt, IsString } from 'class-validator';

export class BrandDTO {

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Example Brand' })
  name?: string;

  @IsOptional()
  @IsInt()
  @ApiProperty({ example: 1 })
  wisher_id?: number;
}
