import { Module } from '@nestjs/common';
import { SolanaController } from './solana.controller';
import { SolanaService } from './solana.service';
import { PrismaService } from '../wisher/prisma.service';

@Module({
  controllers: [SolanaController],
  providers: [SolanaService],
})
export class SolanaModule {}
