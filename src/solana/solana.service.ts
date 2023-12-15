import { Injectable } from '@nestjs/common';
import * as splToken from '@solana/spl-token';
import * as web3 from '@solana/web3.js';

@Injectable()
export class SolanaService {
  hello(): string {
    return 'Hello World!';
  }

  async getAccountBalance(publicKey: string) {
    const connection = new web3.Connection(
      web3.clusterApiUrl('devnet'),
      'confirmed',
    );
    const publicKeyObj = new web3.PublicKey(publicKey);
    const balance = await connection.getBalance(publicKeyObj);
    return balance;
  }
}
