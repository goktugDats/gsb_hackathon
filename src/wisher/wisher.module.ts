import { Module } from '@nestjs/common';
import { WisherController } from './wisher.controller';
import { WisherService } from './wisher.service';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [WisherController],
  providers: [WisherService, PrismaService],
})
export class WisherModule {}
