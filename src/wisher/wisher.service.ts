import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
import { WisherDTO } from './dto/wisher.dto';

@Injectable()
export class WisherService {
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
  ) {}

  async createWisher(data: WisherDTO) {
    return this.prisma.wisher.create({
      data: data,
    });
  }
}
