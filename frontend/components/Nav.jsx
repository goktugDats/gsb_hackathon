"use client"
import Link from 'next/link';
import { useState} from 'react';
import axios from 'axios';




const Nav = () => {

  const [user, setUser] = useState("");
  const [userBalance, setuserBalance] = useState(0);

  const connectWallet = async () => {
    if ("solana" in window) {
      const provider = window.solana;
      if (provider.isPhantom) {
        await provider.connect();
        setUser( provider.publicKey.toString());

        // const response = await axios.get(`https://your-api.com/user/${user}`);
        // console.log(response.data);
      }
    } else {
      console.log("Please install Phantom wallet");
    }
  };

  connectWallet();


  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 items-center'>
        <span className=' head_text text-center' style={{ fontSize: 40 }}>Help Map</span>
      </Link>
      <section>
        <span style={{ fontSize: 20 }}> <span style={{ fontSize: 20, fontWeight:'bold' }}>Account: </span> {user.substring(0,10)+"..."}</span>
        <br />
        <span style={{ fontSize: 20 }}> <span style={{ fontSize: 20, fontWeight: 'bold' }}>Amount: </span> {userBalance+" USDT"}</span>
      </section>
    </nav>
  )
}

export default Nav;
