import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WisherModule } from './wisher/wisher.module';
import { SolanaModule } from './solana/solana.module';

@Module({
  imports: [WisherModule, SolanaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
