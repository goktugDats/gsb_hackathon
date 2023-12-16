import * as base58 from 'bs58';
import { Keypair } from '@solana/web3.js';

export function stringSecretKeyToKeyPair(secretKey: string): Keypair {
  const getKeypairFromHex = base58.decode(secretKey);

  const newKeypair = Keypair.fromSecretKey(getKeypairFromHex);
  return newKeypair;
}
export function secretKeyToString(secretKey: Uint8Array): string {
  const secretKeyToHex = base58.encode(secretKey);
  return secretKeyToHex;
}
