export default async function handler(req, res) {
  const data = {
    name: "Texo Starter",
    tokenName: "Texo",
    symbol: "TEXO",
    decimals: 18,
    totalSupply: 1000000,
    description:
      "Texo Starter is a MultiChain Launchpad built for the interoperability of EVM Chains. Texo Starter takes advantage of the security, decentralization and smart contract functionality of EVM-compatible chains to build a secure prelaunch platform for NFTs and ERC20 tokens.",
    image: "/logo.jpg",
    IDOdate: 1670903400,
    accessType: "Public",
    salePrice: 1,
    distributionDate: 1670989800,
    targetSale: 50000,
  };
  res.status(200).json(data);
}
