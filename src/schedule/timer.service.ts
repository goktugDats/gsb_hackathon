import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { PrismaService } from '../wisher/prisma.service';
import { SolanaService } from '../solana/solana.service';

@Injectable()
export class TimerService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly solonaService: SolanaService,
  ) {}
  @Interval(500000) // Her 5 saniyede bir çalışır
  async handleInterval() {
    console.log('Running task every 5 seconds...');
    const db_query = await this.prismaService.wisher.findMany({
      select: {
        id: true,
        amount: true,
        publicid: true,
      },
    });
    for (let i = 0; i < db_query.length; i++) {
      const amount = db_query[i].amount;
      const chain_balance = await this.solonaService.getAccountBalance(
        db_query[i].publicid,
      );
      if (chain_balance > amount) {
        const db_update = await this.prismaService.wisher.update({
          where: {
            id: db_query[i].id,
          },
          data: {
            is_over: true,
          },
        });
        console.log(db_update);
      }
    }
  }
}
