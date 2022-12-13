import { Contract } from "ethers";
import { contracts, idoABI } from "../../../constants/ABIs";
export default async function handler(req, res) {
  const { launch } = req.query;
  const IDOcontract = new Contract(launch, idoABI, contracts.provider);
  const ipfs = await IDOcontract.ipfs();
  const data = await fetch(ipfs)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error();
    });
  res.status(200).json(data);
}
