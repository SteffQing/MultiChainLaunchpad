import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>TexoStarter</title>
        <meta
          name="title"
          content="Share the Blockchain Vision with TexoStarter"
        />
        <meta
          name="description"
          content="KCC #1 decentralized marketplace for NFTs"
        />
        <meta
          name="keywords"
          content="TexoStarter/ Launchpad / Texo-starter/ texo starter/ nfts / nft / multichain / exosama / ecosystem / erc20 / NFT / Launch / crypto launch/ NFTs trading"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Distance Labs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mart.distant.finance/" />
        <meta property="og:title" content="Distant Finance Marketplace" />
        <meta property="og:description" content="Multi-chain Launchpad" />
        <meta property="og:image" content="/logoL.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mart.distant.finance/" />
        <meta property="twitter:title" content="Distant Finance Marketplace" />
        <meta
          property="twitter:description"
          content="KCC #1 decentralized marketplace for NFTs"
        />
        <meta property="twitter:image" content="/logoL.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
