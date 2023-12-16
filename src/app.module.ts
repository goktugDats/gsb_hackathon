import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WisherModule } from './wisher/wisher.module';
import { SolanaModule } from './solana/solana.module';
import { TimerService } from './schedule/timer.service';
import { ScheduleModule } from '@nestjs/schedule';
import { TimerModule } from './schedule/timer.module';
import { PrismaService } from "./wisher/prisma.service";
import { SolanaService } from "./solana/solana.service";

@Module({
  imports: [WisherModule, SolanaModule, ScheduleModule.forRoot(), TimerModule],
  controllers: [AppController],
  providers: [AppService, TimerService, PrismaService, TimerService,SolanaService],
})
export class AppModule {}
