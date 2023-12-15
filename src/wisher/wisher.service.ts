import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { WisherDTO } from './dto/wisher.dto';
import { BrandDTO } from './dto/brand.dto';

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

  async getAllWishers() {
    return await this.prisma.wisher.findMany();
  }

  async getWishersByEmergencyId(id: number) {
    return await this.prisma.$queryRawUnsafe(
      'select * from wisher w where w.emergency_level > $1;',
      id,
    );
  }
  async createBrand(data: BrandDTO) {
    return await this.prisma.brands.create({
      data: data,
    });
  }
}
