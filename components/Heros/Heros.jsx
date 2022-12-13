import React from 'react';
import styles from "./Heros.module.css";
// import coin from "/coin.svg";
import Image from 'next/image';
import Link from 'next/link';

const Heros = () => {
  return (
      <main className={styles.main}>
        <div className={styles.heroContent}>
           <h1 className={styles.leftHandParagraph_1}>
          A Portal to a new Dimension for DeFi and a Realm of Infinite Possibilities for Web3 Users
           </h1> 
           <h4 className={styles.leftHandParagraph_2}>Your unlimited access card into the bounties of Web3 and the rewards of community-led investments</h4>
           <div className={styles.leftHandBtns}>
              <Link href='#intro'><a>
              <div className={styles.discover}>Discover</div></a></Link>
              <Link href='#products'><a>
              <div className={styles.learnMore}>Learn More</div></a></Link>
           </div>
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