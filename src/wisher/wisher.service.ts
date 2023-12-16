import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { WisherCreateDTO, WisherDTO } from './dto/wisher.dto';
import { BrandDTO } from './dto/brand.dto';
import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import {
  secretKeyToString,
  stringSecretKeyToKeyPair,
} from '../solana/solana.func';
import { CheckoutDto } from "./dto/checkout.dto";

@Injectable()
export class WisherService {
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
  ) {}

  async createWisher(data: WisherCreateDTO) {
    const keypair = Keypair.generate();
    const publicid = keypair.publicKey.toString();
    const secretid = secretKeyToString(keypair.secretKey);

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
      publicid: publicid,
      secretid: secretid,
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
      'select * from wisher w where w.emergency_level > $1 and is_over is false;',
      id,
    );
  }
  async createBrand(data: BrandDTO) {
    return await this.prisma.brands.create({
      data: data,
    });
  }

  async transaction(checkoutDto: CheckoutDto) {
    const wisher = await this.prisma.wisher.findUnique({
      where: {
        id: checkoutDto.wisher_id,
      },
    });

    const connection = new Connection(
      'https://api.devnet.solana.com',
      'confirmed',
    );

    const lamportsToSend = 1_000_000;

    const transferTransaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: new PublicKey(wisher.publicid),
        toPubkey: new PublicKey(checkoutDto.toPublicKey),
        lamports: lamportsToSend * checkoutDto.amount,
      }),
    );
    const keypair = stringSecretKeyToKeyPair(wisher.secretid);
    await sendAndConfirmTransaction(connection, transferTransaction, [keypair]);

    return await this.prisma.wisher.update({
      where: {
        id: checkoutDto.wisher_id,
      },
      data: {
        check_out: checkoutDto.amount,
      },
    });
  }
}
