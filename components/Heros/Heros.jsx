import React from "react";
import styles from "./Heros.module.css";
// import coin from "/coin.svg";
import Image from "next/image";
import Link from "next/link";
import useMediaQuery from "../hooks/useMediaQueryhooks";

const Heros = () => {
  return (
    <main className={styles.main}>
      <div className={styles.backgrounds}>
            <Image
              src="/1267580.webp"
              // src="/1267600.jpg"
              layout="fill"
              objectFit="cover"
              alt="images"
            />
      </div>
      <div className={styles.content}>
        <div className={styles.heroContent}>
          <h1 className={styles.leftHandParagraph_1}>
            Share the Blockchain Vision with TexoStarter
          </h1>
          <h4 className={styles.leftHandParagraph_2}>
            Get early access to innovative projects on the MultiChain <br /> Interoperability at the core
          </h4>
          <div><Link href="/launchpad"><a>Open Launchpad</a></Link></div>
        </div>
      </div>
    </main>
  );
};

export default Heros;
