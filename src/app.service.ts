import { Injectable } from '@nestjs/common';
import { Keypair } from '@solana/web3.js';
import * as base58 from 'bs58';

@Injectable()
export class AppService {
  getHello() {
    return 'Hello World!';
  }

}
