import { IsOptional, IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LastWishDto {
  @ApiProperty({ required: false, example: 'example-secretid' })
  @IsString()
  @IsOptional()
  secretid?: string;

  @ApiProperty({ required: false, example: 'example-tc_id' })
  @IsString()
  @IsOptional()
  tc_id?: string;

  @ApiProperty({ required: false, example: 'example-message' })
  @IsString()
  @IsOptional()
  message?: string;

  @ApiProperty({ required: false, example: 'http://example.com' })
  @IsString()
  @IsOptional()
  @IsUrl()
  message_url?: string;

  @ApiProperty({ required: false, example: 'example-toPublicid' })
  @IsString()
  @IsOptional()
  toPublicid?: string;
}
