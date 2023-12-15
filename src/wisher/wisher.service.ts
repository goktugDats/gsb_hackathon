import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { WisherCreateDTO, WisherDTO } from './dto/wisher.dto';
import { BrandDTO } from './dto/brand.dto';

@Injectable()
export class WisherService {
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
  ) {}

  async createWisher(data: WisherCreateDTO) {
    const wisher: WisherDTO = {
      title: data.title,
      describe: data.describe,
      personInvolved: data.personInvolved,
      emergency_level: data.emergency_level,
      city: data.city,
      problem_type: data.problem_type,
      balance: data.balance,
      amount: data.amount,
      created_at: new Date(),
      updated_at: new Date(),
      publicid: 'example',
      secretid: 'example',
      text: data.text,
      is_over: false,
      location: data.location,
    };
    return this.prisma.wisher.create({
      data: wisher,
    });
  }

  async getAllWishers() {
    return await this.prisma.wisher.findMany({ where: { is_over: false } });
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
