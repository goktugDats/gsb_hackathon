import { Injectable } from '@nestjs/common';

@Injectable()
export class SolanaService {
  hello(): string {
    return 'Hello World!';
  }
}
