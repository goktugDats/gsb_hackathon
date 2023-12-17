"use client"
import Link from 'next/link';
import { useState} from 'react';




const Nav = () => {

  const [user, setUser] = useState("");
  const [userBalance, setuserBalance] = useState(0);

  const connectWallet = async () => {
    if ("solana" in window) {
      const provider = window.solana;
      if (provider.isPhantom) {
        await provider.connect();
        setUser( provider.publicKey.toString());
      }
    } else {
      console.log("Please install Phantom wallet");
    }
  };

  connectWallet();


  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 items-center'>
        <span className=' head_text text-center' style={{ fontSize: 40, color:'#ff1111' }}>Şeffaf Destek</span>
      </Link>
      <nav className="flex justify-center space-x-4 my-4 mt-10">
        <Link href="/">
          <button style={{ fontWeight: '1000', fontSize: '25px' }} className="px-4 py-2 text-black rounded hover:bg-black-600">Yardım Haritası</button>
        </Link>
        <Link href="/wish">
          <button style={{fontWeight:'1000', fontSize:'25px', color:'#010101'}} className="px-4 py-2 text-black rounded hover:bg-black-600">Desteğini Al</button>
        </Link>
      </nav>
      
      <section>
        <span style={{ fontSize: 20 }}> <span style={{ fontSize: 20, fontWeight:'bold' }}>Hesap: </span> {user.substring(0,10)+"..."}</span>
        <br />
        <span style={{ fontSize: 20 }}> <span style={{ fontSize: 20, fontWeight: 'bold' }}>Miktar: </span> {userBalance+" USDT"}</span>
      </section>
    </nav>
  )
}

export default Nav;
