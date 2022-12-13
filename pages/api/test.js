import { contracts } from "../../constants/ABIs";
export default async function handler(req, res) {
  const { FactoryInstance } = contracts;
  const IDOcontracts = await FactoryInstance.getContracts();
  res.status(200).json({ IDOcontracts });
}
