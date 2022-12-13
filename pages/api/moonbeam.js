export default async function handler(req, res) {
  const data = {
    name: "Moonbeam",
    tokenName: "Glimmer",
    symbol: "GLMR",
    decimals: 18,
    totalSupply: 66000000,
    description:
      "Moonbeam is a multichain project that brings the benefits of Ethereum to other blockchains. Our platform allows developers to build and deploy decentralized applications (DApps) on multiple chains, using the Glimmer token (GLMR) to access the network and its features. Moonbeam enables cross-chain interoperability and empowers developers to build the next generation of DApps.",
    image:
      "https://moonbeam.network/wp-content/uploads/2020/03/Moonbeam-Logo-Final-500px.png",
    IDOdate: 1671098400,
    accessType: "Private",
    salePrice: 0.0015,
    distributionDate: 1671354000,
    targetSale: 200000,
  };
  res.status(200).json(data);
}
