import { Module } from '@nestjs/common';
import { TimerService } from './timer.service';
import { PrismaService } from '../wisher/prisma.service';
import { SolanaService } from '../solana/solana.service';

@Module({
  imports: [],
  controllers: [],
  providers: [TimerService, PrismaService, SolanaService],
})
export class TimerModule {}
