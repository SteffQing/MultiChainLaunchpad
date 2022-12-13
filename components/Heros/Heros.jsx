import React from "react";
import styles from "./Heros.module.css";
// import coin from "/coin.svg";
import Image from "next/image";
import Link from "next/link";
import useMediaQuery from "../hooks/useMediaQueryhooks";

const Heros = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const BgImages = [
    {
      id: "BG1",
      Image: "/blob1.svg",
    },
    {
      id: "BG2",
      Image: "/blob2.svg",
    },
    {
      id: "BG3",
      Image: "/blob3.svg",
    },
    {
      id: "BG4",
      Image: "/blob4.svg",
    },
  ];
  return (
    <main className={styles.main}>
      <div className={styles.backgrounds}>
        {BgImages.map((image) => (
          <div key={image.id} className={styles.bg}>
            <Image
              src={image.Image}
              width={isDesktop ? 200 : 170}
              height={isDesktop ? 200 : 170}
              alt="images"
            />
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles.heroContent}>
          <h1 className={styles.leftHandParagraph_1}>
            Unleash Your Blockchain Vision with TexoStarter: The Cutting-Edge
            MultiChain Launchpad
          </h1>
          <h4 className={styles.leftHandParagraph_2}>
            <span className={styles.h4Specisl}>Community -</span>{" "}
            <span>
              Get early access to new and inventive products on any EVM chain
            </span>{" "}
            <br />
            <span className={styles.h4Specisl}>Developers -</span>{" "}
            <span>
              {" "}
              Deploy and build innovative technology on any EVM chain
            </span>
            <br />
            <span>Discover the perfect launchpad for the MultiChain </span>
          </h4>
        </div>
      </div>
    </main>
  );
};

export default Heros;
