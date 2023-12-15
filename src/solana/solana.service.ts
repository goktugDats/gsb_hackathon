import { Injectable } from '@nestjs/common';
import * as solanaWeb3 from '@solana/web3.js';

@Injectable()
export class SolanaService {
  private connection: solanaWeb3.Connection;
  private feePayer: solanaWeb3.Keypair;

  constructor() {
    // Connect to the Solana cluster
    this.connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'));

    // Load or create a fee payer keypair (this is just an example, manage keypairs securely!)
    this.feePayer = solanaWeb3.Keypair.generate();
  }

  async sendTransaction(recipientPublicKeyStr: string, amount: number): Promise<string> {
    const recipientPublicKey = new solanaWeb3.PublicKey(recipientPublicKeyStr);

    // Create a transaction
    let transaction = new solanaWeb3.Transaction().add(
        solanaWeb3.SystemProgram.transfer({
          fromPubkey: this.feePayer.publicKey,
          toPubkey: recipientPublicKey,
          lamports: amount,
        }),
    );

    // Sign the transaction with the fee payer's keypair
    transaction = await solanaWeb3.sendAndConfirmTransaction(this.connection, transaction, [this.feePayer]);

    return transaction;
  }
}
