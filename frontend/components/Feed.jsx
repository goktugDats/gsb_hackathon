'use client'
import Image from 'next/image';
import { ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import contractABI from '../getJson/MyContract.json'




const PromtCardList = ({}) => {

  let cuzdan = 0;
  const connectWallet = async (amount) => {
    cuzdan = amount
    if (typeof window.ethereum !== 'undefined') {
      const provider = new Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract("0x217151857F674683D773Ff9452BBe1C018e372c2", contractABI, signer);

      try {
        await contract.transfer("0x97E7f2B08a14e4C0A8Dca87fbEB1F68b397c91df", cuzdan);      
      } catch (err) {
        console.log('Error: ', err);
      }
    }else{
      console.log("Connecting to");
    }
  };  
  



  return (
    <div className='mt-16 prompt_layout justify-between' style={{ width: '1000px' }}>

      {/* <PromtCard
          key={1}
          post={"post"}
          handleTagClick={handleTagClick}
          className='product_card' // CSS class added
        /> */}

      <div style={{ padding: '8px', backgroundColor: 'white', borderRadius: '20px', marginBottom: '30px', marginRight: '10px', width: '300px', width: '300px', marginBottom: '30px' }}>
        <div style={{ padding: '10px', paddingBottom: '6px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', textAlign: 'left' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 500, letterSpacing: '-0.02em', color: '#4B5563' }}>
                Trendyol 30 TL Hediye Kart
              </h2>
              <Image
                src="/assets/images/gift.jpg"
                alt='Promtopia Logo'
                width={200}
                height={200}
                className='object-contain'
              />
            </div>
            <div style={{ marginTop: '6px' }}>
              <p>
                <span style={{ fontSize: '30px', fontWeight: 300, letterSpacing: '-0.02em', color: '#000000' }}>
                  26 BB
                </span>

              </p>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: '6px', paddingRight: '6px', paddingBottom: '8px', marginBottom: '20px', marginTop: '20px' }}>
          <a onClick={() => connectWallet("26")} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '6px', paddingTop: '2.5px', paddingBottom: '2.5px', textAlign: 'center', textDecoration: 'none', color: 'white', transitionDuration: '0.2s', backgroundColor: 'black', border: '2px solid black', borderRadius: '9999px', lineHeight: '1', outline: 'none', boxShadow: 'none', fontSize: '25px', transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDuration: '150ms' }}>
            Buy
          </a>
        </div>
      </div>


      <div style={{ padding: '8px', backgroundColor: 'white', borderRadius: '20px', marginBottom: '30px', marginRight: '10px', width: '300px', width: '300px' }}>
        <div style={{ padding: '10px', paddingBottom: '6px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', textAlign: 'left' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 500, letterSpacing: '-0.02em', color: '#4B5563' }}>
                Hepsiburada 100 TL Hediye Kart
              </h2>
              <Image
                src="/assets/images/gift.jpg"
                alt='Promtopia Logo'
                width={200}
                height={200}
                className='object-contain'
              />

            </div>
            <div style={{ marginTop: '6px' }}>
              <p>
                <span style={{ fontSize: '30px', fontWeight: 300, letterSpacing: '-0.02em', color: '#000000' }}>
                  11 BB
                </span>
              </p>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: '6px', paddingRight: '6px', paddingBottom: '8px', marginBottom: '20px', marginTop: '20px', marginTop: '20px' }}>
          <a onClick={() => connectWallet("11")} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '6px', paddingTop: '2.5px', paddingBottom: '2.5px', textAlign: 'center', textDecoration: 'none', color: 'white', transitionDuration: '0.2s', backgroundColor: 'black', border: '2px solid black', borderRadius: '9999px', lineHeight: '1', outline: 'none', boxShadow: 'none', fontSize: '25px', transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDuration: '150ms' }}>
            Buy
          </a>
        </div>
      </div>


      <div style={{ padding: '8px', backgroundColor: 'white', borderRadius: '20px', marginBottom: '30px', marginRight: '10px', width: '300px', width: '300px', marginRight: '10px' }}>
        <div style={{ padding: '10px', paddingBottom: '6px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', textAlign: 'left' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 500, letterSpacing: '-0.02em', color: '#4B5563' }}>
                Udemy 100 TL Hediye Kuponu
              </h2>
              <Image
                src="/assets/images/gift.jpg"
                alt='Promtopia Logo'
                width={200}
                height={200}
                className='object-contain'
              />

            </div>
            <div style={{ marginTop: '6px' }}>
              <p>
                <span style={{ fontSize: '30px', fontWeight: 300, letterSpacing: '-0.02em', color: '#000000' }}>
                  5 BB
                </span>

              </p>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: '6px', paddingRight: '6px', paddingBottom: '8px', marginBottom: '20px', marginTop: '20px' }}>
          <a onClick={() => connectWallet("5")} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '6px', paddingTop: '2.5px', paddingBottom: '2.5px', textAlign: 'center', textDecoration: 'none', color: 'white', transitionDuration: '0.2s', backgroundColor: 'black', border: '2px solid black', borderRadius: '9999px', lineHeight: '1', outline: 'none', boxShadow: 'none', fontSize: '25px', transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDuration: '150ms' }}>
            Buy
          </a>
        </div>
      </div>


      <div style={{ padding: '8px', backgroundColor: 'white', borderRadius: '20px', marginBottom: '30px', marginRight: '10px', width: '300px', width: '300px' }}>
        <div style={{ padding: '10px', paddingBottom: '6px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', textAlign: 'left' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 500, letterSpacing: '-0.02em', color: '#4B5563' }}>
                Amazon 50 TL Hediye Kart
              </h2>
              <Image
                src="/assets/images/gift.jpg"
                alt='Promtopia Logo'
                width={200}
                height={200}
                className='object-contain'
              />

            </div>
            <div style={{ marginTop: '6px' }}>
              <p>
                <span style={{ fontSize: '30px', fontWeight: 300, letterSpacing: '-0.02em', color: '#000000' }}>
                  13 BB
                </span>

              </p>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: '6px', paddingRight: '6px', paddingBottom: '8px', marginBottom: '20px', marginTop: '20px' }}>
          <a onClick={() => connectWallet("13")} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '6px', paddingTop: '2.5px', paddingBottom: '2.5px', textAlign: 'center', textDecoration: 'none', color: 'white', transitionDuration: '0.2s', backgroundColor: 'black', border: '2px solid black', borderRadius: '9999px', lineHeight: '1', outline: 'none', boxShadow: 'none', fontSize: '25px', transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDuration: '150ms' }}>
            Buy
          </a>
        </div>
      </div>


      <div style={{ padding: '8px', backgroundColor: 'white', borderRadius: '20px', marginBottom: '30px', marginRight: '10px', width: '300px', width: '300px' }}>
        <div style={{ padding: '10px', paddingBottom: '6px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', textAlign: 'left' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 500, letterSpacing: '-0.02em', color: '#4B5563' }}>
                Spotify 40 TL Hediye Kuponu
              </h2>
              <Image
                src="/assets/images/gift.jpg"
                alt='Promtopia Logo'
                width={200}
                height={200}
                className='object-contain'
              />

            </div>
            <div style={{ marginTop: '6px' }}>
              <p>
                <span style={{ fontSize: '30px', fontWeight: 300, letterSpacing: '-0.02em', color: '#000000' }}>
                  14 BB
                </span>

              </p>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: '6px', paddingRight: '6px', paddingBottom: '8px', marginBottom: '20px', marginTop: '20px' }}>
          <a onClick={() => connectWallet("14")} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '6px', paddingTop: '2.5px', paddingBottom: '2.5px', textAlign: 'center', textDecoration: 'none', color: 'white', transitionDuration: '0.2s', backgroundColor: 'black', border: '2px solid black', borderRadius: '9999px', lineHeight: '1', outline: 'none', boxShadow: 'none', fontSize: '25px', transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDuration: '150ms' }}>
            Buy
          </a>
        </div>
      </div>
      <div style={{ padding: '8px', backgroundColor: 'white', borderRadius: '20px', marginBottom: '30px', marginRight: '10px', width: '300px', width: '300px' }}>
        <div style={{ padding: '10px', paddingBottom: '6px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', textAlign: 'left' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 500, letterSpacing: '-0.02em', color: '#4B5563' }}>
                Spotify 70 TL Hediye Kuponu
              </h2>
              <Image
                src="/assets/images/gift.jpg"
                alt='Promtopia Logo'
                width={200}
                height={200}
                className='object-contain'
              />

            </div>
            <div style={{ marginTop: '6px' }}>
              <p>
                <span style={{ fontSize: '30px', fontWeight: 300, letterSpacing: '-0.02em', color: '#000000' }}>
                  17 BB
                </span>

              </p>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: '6px', paddingRight: '6px', paddingBottom: '8px', marginBottom: '20px', marginTop: '20px' }}>
          <a onClick={() => connectWallet("17")} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '6px', paddingTop: '2.5px', paddingBottom: '2.5px', textAlign: 'center', textDecoration: 'none', color: 'white', transitionDuration: '0.2s', backgroundColor: 'black', border: '2px solid black', borderRadius: '9999px', lineHeight: '1', outline: 'none', boxShadow: 'none', fontSize: '25px', transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDuration: '150ms' }}>
            Buy
          </a>
        </div>
      </div>


      <div style={{ padding: '8px', backgroundColor: 'white', borderRadius: '20px', marginBottom: '30px', marginRight: '10px', width: '300px', width: '300px' }}>
        <div style={{ padding: '10px', paddingBottom: '6px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', textAlign: 'left' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 500, letterSpacing: '-0.02em', color: '#4B5563' }}>
                Netflix Hediye Kartı
              </h2>
              <Image
                src="/assets/images/gift.jpg"
                alt='Promtopia Logo'
                width={200}
                height={200}
                className='object-contain'
              />

            </div>
            <div style={{ marginTop: '6px' }}>
              <p>
                <span style={{ fontSize: '30px', fontWeight: 300, letterSpacing: '-0.02em', color: '#000000' }}>
                  19 BB
                </span>

              </p>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: '6px', paddingRight: '6px', paddingBottom: '8px', marginBottom: '20px', marginTop: '20px' }}>
          <a onClick={() => connectWallet("19")} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '6px', paddingTop: '2.5px', paddingBottom: '2.5px', textAlign: 'center', textDecoration: 'none', color: 'white', transitionDuration: '0.2s', backgroundColor: 'black', border: '2px solid black', borderRadius: '9999px', lineHeight: '1', outline: 'none', boxShadow: 'none', fontSize: '25px', transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDuration: '150ms' }}>
            Buy
          </a>
        </div>
      </div>
      <div style={{ padding: '8px', backgroundColor: 'white', borderRadius: '20px', marginBottom: '30px', marginRight: '10px', width: '300px', width: '300px' }}>
        <div style={{ padding: '10px', paddingBottom: '6px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', textAlign: 'left' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 500, letterSpacing: '-0.02em', color: '#4B5563' }}>
                BeIn Sports Hediye Kartı
              </h2>
              <Image
                src="/assets/images/gift.jpg"
                alt='Promtopia Logo'
                width={200}
                height={200}
                className='object-contain'
              />

            </div>
            <div style={{ marginTop: '6px' }}>
              <p>
                <span style={{ fontSize: '30px', fontWeight: 300, letterSpacing: '-0.02em', color: '#000000' }}>
                  26 BB
                </span>

              </p>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: '6px', paddingRight: '6px', paddingBottom: '8px', marginBottom: '20px', marginTop: '20px' }}>
          <a onClick={() => connectWallet("26")} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '6px', paddingTop: '2.5px', paddingBottom: '2.5px', textAlign: 'center', textDecoration: 'none', color: 'white', transitionDuration: '0.2s', backgroundColor: 'black', border: '2px solid black', borderRadius: '9999px', lineHeight: '1', outline: 'none', boxShadow: 'none', fontSize: '25px', transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDuration: '150ms' }}>
            Buy
          </a>
        </div>
      </div>

      <div style={{ padding: '8px', backgroundColor: 'white', borderRadius: '20px', marginBottom: '30px', marginRight: '10px', width: '300px', width: '300px' }}>
        <div style={{ padding: '10px', paddingBottom: '6px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', textAlign: 'left' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 500, letterSpacing: '-0.02em', color: '#4B5563' }}>
                BluTV Hediye Kartı
              </h2>
              <Image
                src="/assets/images/gift.jpg"
                alt='Promtopia Logo'
                width={200}
                height={200}
                className='object-contain'
              />

            </div>
            <div style={{ marginTop: '6px' }}>
              <p>
                <span style={{ fontSize: '30px', fontWeight: 300, letterSpacing: '-0.02em', color: '#000000' }}>
                  47 BB
                </span>

              </p>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: '6px', paddingRight: '6px', paddingBottom: '8px', marginBottom: '20px', marginTop: '20px' }}>
          <a onClick={() => connectWallet("47")} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '6px', paddingTop: '2.5px', paddingBottom: '2.5px', textAlign: 'center', textDecoration: 'none', color: 'white', transitionDuration: '0.2s', backgroundColor: 'black', border: '2px solid black', borderRadius: '9999px', lineHeight: '1', outline: 'none', boxShadow: 'none', fontSize: '25px', transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDuration: '150ms' }}>
            Buy
          </a>
        </div>
        
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100%', marginBottom: '50px' }}>
        <a href='/edu' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50%', padding: '6px', paddingTop: '2.5px', paddingBottom: '2.5px', textAlign: 'center', textDecoration: 'none', color: 'white', transitionDuration: '0.2s', backgroundColor: 'black', border: '2px solid black', borderRadius: '9999px', lineHeight: '1', outline: 'none', boxShadow: 'none', fontSize: '25px', transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDuration: '150ms' }}>
          Certificate
        </a>
      </div>

      

    </div>
    
  )
}

const Feed = () => {

  return (
    <section className="feed product_feed">
      <PromtCardList
      />
    </section>
  )
}

export default Feed