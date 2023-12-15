import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class WisherDTO {
  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Example Title' })
  title?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Example Description' })
  describe?: string;

  @IsOptional()
  @IsInt()
  @ApiProperty({ example: 3 })
  personInvolved?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: 1.5 })
  emergency_level?: number;

  @IsOptional()
  @IsInt()
  @ApiProperty({ example: 1 })
  city?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Example Problem Type' })
  problem_type?: string;

  @IsOptional()
  @IsInt()
  @ApiProperty({ example: 500 })
  balance?: number;

  @IsOptional()
  @IsInt()
  @ApiProperty({ example: 1000 })
  amount?: number;

  @IsOptional()
  @IsDate()
  @ApiProperty({ example: '2023-12-15T00:00:00Z' })
  created_at?: Date;

  @IsOptional()
  @IsDate()
  @ApiProperty({ example: '2023-12-15T00:00:00Z' })
  updated_at?: Date;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Example Text' })
  text?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'example-public-id' })
  publicid?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'example-secret-id' })
  secretid?: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ example: false })
  is_over?: boolean;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: '42.313123,41.3213' })
  location?: string;
}
