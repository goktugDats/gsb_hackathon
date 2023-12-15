import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WisherModule } from './wisher/wisher.module';

@Module({
  imports: [WisherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
