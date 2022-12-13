import React from 'react';
import styles from "./Heros.module.css";
// import coin from "/coin.svg";
import Image from 'next/image';
import Link from 'next/link';
import useMediaQuery from '../hooks/useMediaQueryhooks';

const Heros = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const BgImages = [
    {
      id: "BG1",
      Image: "/eth.png"
    },
    {
      id: "BG2",
      Image: "/usdt.png"
    },
    {
      id: "BG3",
      Image: "/exosama.svg"
    },
  ]
  return (
      <main className={styles.main}>
        {/* {
          BgImages.map((d, i)=>{
            <div key={i}>
              <div className={styles.blurBG}></div>
              <Image src={d.Image} width={isDesktop?60:30} height={isDesktop?60:30} alt="images"/>
            </div>
          })
        } */}
        <div className={styles.backgrounds}>
            <div className={styles.bg}>
                <div className={styles.Blur1}></div>
                <Image src="/eth.png" width={isDesktop?60:30} height={isDesktop?60:30} alt="images"/>
            </div>
            <div className={styles.BG2}>
                <div className={styles.Blur2}></div>
                <Image src="/usdt.png" width={isDesktop?60:30} height={isDesktop?60:30} alt="images"/>
            </div>
            <div className={styles.BG3}>
                <div className={styles.Blur3}></div>
                <Image src="/usdt.png" width={isDesktop?60:30} height={isDesktop?60:30} alt="images"/>
            </div>
            <div className={styles.BG4}>
                <div className={styles.Blur4}></div>
                <Image src="/eth.png" width={isDesktop?60:30} height={isDesktop?60:30} alt="images"/>
            </div>
        </div>


        <div className={styles.heroContent}>
           <h1 className={styles.leftHandParagraph_1}>
              Unleash Your Blockchain Vision with TexoStarter: The Cutting-Edge MultiChain Launchpad
           </h1> 
           <h4 className={styles.leftHandParagraph_2}>
                <span className={styles.h4Specisl}>Community-</span> <span>Get early access to new and inventive products on any EVM chain</span> 
                <span  className={styles.h4Specisl}>Developers-</span> <span> Deploy and build innovative technology on any EVM chain</span>
                <span>Discover the perfect launchpad for the MultiChain </span>
           </h4>
           {/* <div className={styles.leftHandBtns}>
              <Link href='#intro'><a>
              <div className={styles.discover}>Discover</div></a></Link>
              <Link href='#products'><a>
              <div className={styles.learnMore}>Learn More</div></a></Link>
           </div> */}
        </div>
        {/* <div className={styles.heroImage}>
          <div className={styles.card}>
            <div className={styles.closeCard}></div>
            <div className={styles.openingCard}></div>
          </div>
        </div> */}
        
      </main>
  )
}

export default Heros