import React from 'react';
import styles from "./Product.module.css";
import { HiArrowNarrowRight } from "react-icons/hi"
import Link from 'next/link';

export const Products = () => {
  return (
    <div className={styles.container}>
<h2 id='products'>Product list</h2>
        <div className={styles.ProductsList}>
          <Link href='/launchpad'><a><div><p>LaunchPad</p> <HiArrowNarrowRight/></div></a></Link>
          <Link href='/#'><a><div><p>Index Fund Manangement</p><HiArrowNarrowRight/></div></a></Link>
          <Link href='/#'><a><div><p>Liquidity Protocol</p><HiArrowNarrowRight/></div></a></Link>
          <Link href='/#'><a><div><p>Community-Led Seed Investment</p><HiArrowNarrowRight/></div></a></Link>
        </div>
    </div>
  )
}
