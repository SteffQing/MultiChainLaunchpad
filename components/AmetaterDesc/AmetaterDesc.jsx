import React from 'react';
import styles from "./AmetaterDesc.module.css";
import Image from 'next/image';
import Link from 'next/link';

const AmetaterDesc = () => {
  return (
    <div>
      <div className={styles.cardContainer} id='intro'>
          <div className={styles.card}>
            <div className={styles.edge_1}></div>
            <div className={styles.edge_2}></div>
            <div className={styles.edge_3}></div>
            <div className={styles.edge_4}></div>
            <div className={styles.cardContent}>
                <div className={styles.cardParagraphs}>
                  <h3>What is AmeStarter?</h3>
                  <p>AmeStarter is a congolomerate of web3 and DeFi products built safely on the Polygon network. It also offers community members the opportunity to benefit bountifully from a wide array of its products.</p>
                  <div className={styles.learnMoore}>
                  <Link href='https://docs.amestarter.com'><a> <p>Learn More</p></a></Link> 
                    <div><Image src='/coin.svg' width={55} height={55} alt="coin" /></div>
                  </div>
                </div>
                <div className={styles.cardImage}>
                  <div className={styles.image}>
                  <Image src='/coin.svg' objectFit='contain' layout='fill' alt="coin" /></div>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AmetaterDesc