export default async function handler(req, res) {
  const data = {
    name: "Astar Network",
    tokenName: "Astar",
    symbol: "ASTR",
    decimals: 18,
    totalSupply: 100000,
    description:
      "Astar Network is a crypto-based lending platform that allows users to lend and borrow cryptocurrencies, earn interest on their deposits, and access advanced trading and investment tools. Our platform uses the Astar token to facilitate transactions and rewards users for participating in the network.",
    image: "https://astar.network/images/brand-logo-mark.png",
    IDOdate: 1670835600,
    accessType: "Public",
    salePrice: 0.032,
    distributionDate: 1671958800,
    targetSale: 500000,
  };
  res.status(200).json(data);
}
