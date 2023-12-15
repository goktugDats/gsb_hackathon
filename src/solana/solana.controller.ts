import { Controller, Get, Inject } from '@nestjs/common';
import { SolanaService } from './solana.service';


@Controller('solana')
export class SolanaController {
  constructor(
    @Inject(SolanaService)
    private readonly solanaService: SolanaService,
  ) {}
  @Get(`hello`)
  getHello(): string {
    return this.solanaService.hello();
  }
}
