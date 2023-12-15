import solanaWeb3, {
    Connection,
    PublicKey,
    Transaction,
    Keypair,
    LAMPORTS_PER_SOL,
    sendAndConfirmTransaction,
    SystemProgram,
    Signer,
} from '@solana/web3.js';
import * as splToken from '@solana/spl-token';

class SolanaTransaction {
    connection: Connection;
    senderKeypair: Signer;

    constructor(cluster: string, senderPublicKey: Signer) {
        this.connection = new Connection(cluster, 'confirmed');
        this.senderKeypair = senderPublicKey;
    }

    async sendSol(receiverPublicKeyStr: string, amount: number): Promise<string> {
        const receiverPublicKey = new PublicKey(receiverPublicKeyStr);
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: this.senderKeypair.publicKey,
                toPubkey: receiverPublicKey,
                lamports: amount * LAMPORTS_PER_SOL,
            }),
        );

        return await sendAndConfirmTransaction(this.connection, transaction, [this.senderKeypair]);
    }

    async generateNewWallet() {
        const keypair = solanaWeb3.Keypair.generate();
        const privateKeyUint8Array = keypair.secretKey;
        const privateKeyString = Array.from(privateKeyUint8Array).join(',');

        return {
            privateKeyUint8Array,
            privateKeyString,
            publicKeyString: keypair.publicKey.toString(),
        };
    }

    async prepareTransferTransaction(senderPublicKeyString: string, recipientPublicKeyString: string, amount: number) {
        const senderPublicKey = new PublicKey(senderPublicKeyString);
        const recipientPublicKey = new PublicKey(recipientPublicKeyString);
        const usdcTokenMintAddress = new PublicKey('USDC_MINT_ADDRESS_HERE');

        const senderTokenAccount = await splToken.getOrCreateAssociatedTokenAccount(this.connection, senderPublicKey, usdcTokenMintAddress, senderPublicKey);
        const recipientTokenAccount = await splToken.getOrCreateAssociatedTokenAccount(this.connection, senderPublicKey, usdcTokenMintAddress, recipientPublicKey);

        const transaction = new Transaction().add(
            splToken.createTransferInstruction(
                senderTokenAccount.address,
                recipientTokenAccount.address,
                senderPublicKey,
                amount,
            ),
        );

        const { blockhash } = await this.connection.getRecentBlockhash();
        transaction.recentBlockhash = blockhash;

        const serializedTransaction = transaction.serialize({
            requireAllSignatures: false,
        });

        return serializedTransaction.toString('base64');
    }
}

export default SolanaTransaction;
