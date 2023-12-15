import SolanaTransaction from './SolanaTransaction';
import solanaWeb3 from "@solana/web3.js";

async function main() {
    const senderPrivateKey = new Uint8Array([/* Array of numbers representing the private key */]);
    const senderKeypair = solanaWeb3.Keypair.fromSecretKey(senderPrivateKey);

    const cluster = 'https://api.devnet.solana.com';
    const solanaTransactor = new SolanaTransaction(cluster, senderKeypair);

    const receiverPublicKey = 'ReceiverPublicKeyHere';
    const amount = 0.1; // Amount of SOL to send

    try {
        const transactionSignature = await solanaTransactor.sendSol(receiverPublicKey, amount);
        console.log('Transaction successful with signature:', transactionSignature);

        const walletInfo = await solanaTransactor.generateNewWallet();
        console.log('Generated Wallet:', walletInfo);
    } catch (error) {
        console.error('Transaction failed:', error);
    }
}

main();
