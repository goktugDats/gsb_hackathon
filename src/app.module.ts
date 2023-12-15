import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WisherModule } from './wisher/wisher.module';
import { SolanaModule } from './solana/solana.module';
import { ScheduleService } from './schedule/schedule.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [WisherModule, SolanaModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, ScheduleService],
})
export class AppModule {}
