import { IsInt, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CheckoutDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(0, { message: 'Amount must be a positive number' })
  @ApiProperty({
    type: Number,
    example: 0.2,
    description: 'The amount to be checked out',
  })
  amount: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({
    type: Number,
    example: 1,
    description: 'The ID of the checkout',
  })
  wisher_id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    example: 'destinationPublicKey',
    description: 'The public key of the destination',
  })
  toPublicKey: string;
}
