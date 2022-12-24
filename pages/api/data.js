export default async function handler(req, res) {
  const data = {
    name: "Texo Starter",
    tokenName: "Texos",
    symbol: "TEXOS",
    decimals: 18,
    totalSupply: 1000000,
    description:
      "Texo Starter is a MultiChain Launchpad built for the interoperability of EVM Chains. Texo Starter takes advantage of the security, decentralization and smart contract functionality of EVM-compatible chains to build a secure prelaunch platform for NFTs and ERC20 tokens.",
    image: "/logo.png",
    IDOdate: 1671796800,
    accessType: "Public",
    salePrice: 1,
    distributionDate: 1672574400,
    targetSale: 50000,
  };
  res.status(200).json(data);
}
