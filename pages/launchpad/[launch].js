import React, { useEffect, useState } from "react";
import styles from "../../styles/Launchpadportal.module.css";
import Image from "next/image";
import { useWeb3React } from "@web3-react/core";
import { idoABI, contracts } from "../../constants/ABIs";
import { Contract, utils } from "ethers";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Launch({ ipfs, launch }) {
  const { active, account, library } = useWeb3React();
  const [purchaseAmount, setPurchaseAmount] = useState("");
  const [trxProcess, setTrxProcessing] = useState(false);
  const [openPurchase, setPurchaseOpen] = useState(false);
  const [totalRaised, setTotalRaised] = useState(null);
  const [userPurchase, setUserPurchase] = useState(null);
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [time, setTime] = useState(null);
  const [date, setDate] = useState("");
  const distDate = new Date(1670989800 * 1000);
  const [progressWidth, setProgressBarWidth] = useState(null);
  async function CalculateProgressBarWidth() {
    const currentTimeInMS = new Date().getTime();
    setTime(Math.floor(currentTimeInMS / 1000));
    const localTime = new Date(currentTimeInMS);
    const IDOTimeInSeconds = ipfs.IDOdate * 1000;
    const IDOTime = new Date(IDOTimeInSeconds);
    let hours = localTime.getUTCHours();
    let minutes = localTime.getUTCMinutes();
    let seconds = localTime.getUTCSeconds();
    let hour = IDOTime.getUTCHours();
    let minute = IDOTime.getUTCMinutes();
    let second = IDOTime.getUTCSeconds();
    setDate(
      `${Math.abs(hours - hour)}:${Math.abs(minutes - minute)}:${Math.abs(
        seconds - second
      )}`
    );
    const IDOcontract = new Contract(launch, idoABI, contracts.provider);
    const totalTokenTBSold = ipfs.targetSale;
    const sold = await IDOcontract.totalRaised();
    const tokenSold = utils.formatEther(sold);
    setTotalRaised(tokenSold);
    if (active) {
      const purchases = await IDOcontract.purchase(account);
      const purchaseValue = utils.formatEther(purchases);
      setUserPurchase(purchaseValue);
    }
    var widthRatio = tokenSold / totalTokenTBSold;
    var width = widthRatio * 100 + "%";
    setProgressBarWidth(width);
  }
  const PurchaseAllocation = async () => {
    try {
      const signer = await library.getSigner();
      // const token = new Contract(contracts.StableCoin, tokenABI, signer);
      // const approval = await token.approve(launch, amount);
      // setTrxProcessing(true);
      // await approval.wait();
      console.log(utils.parseEther(purchaseAmount.toString()));
      const contract = new Contract(launch, idoABI, signer);
      const purchaseTxn = await contract.purchaseToken({
        value: "10000000000",
      });
      await purchaseTxn.wait();
      purchaseTxn.hash && setTrxProcessing(false);
      setPurchaseOpen(false);
    } catch (error) {
      console.log(error);
      setErrorModal(true);
      error.code == -32000
        ? setErrorMessage("Transaction Overpriced")
        : error.code == 4001
        ? setErrorMessage("User denied transaction signature")
        : error.code == -32603
        ? setErrorMessage("execution reverted")
        : setErrorMessage("An Unknown error occured");
      setErrorModal(false);
    }
  };
  const setAmount = (e) => {
    setPurchaseAmount((value) => e.target.value);
  };
  useEffect(() => {
    CalculateProgressBarWidth();
  }, [active, account, trxProcess]);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.Header}>
          <div className={styles.heroImageContainer}>
            <Image src={ipfs.image} width={80} height={80} alt={ipfs.name} />
          </div>
          <h3>{ipfs.name}</h3>
        </div>
        <div className={styles.description}>
          <h4>{ipfs.description}</h4>
        </div>
        <div className={styles.IDOdetails}>
          <div className={styles.absolute}>
            <div className={styles.image}>
              <Image src="/square.svg" width={20} height={20} alt="square" />
            </div>
            <span className={styles.coinPrice}>
              <span>
                1SAMA = {1 / `${ipfs.salePrice}`}
                {ipfs.symbol}
              </span>
            </span>
          </div>
          <div className={styles.relative}>
            <p>Total Raised</p>
            <span>{totalRaised} SAMA</span>
            <div className={styles.progressSection}>
              <div className={styles.progress}>
                <span className={styles.progressPerHundred}>
                  Progress: <span>{progressWidth}</span>
                </span>
                <span className={styles.progressPerTokenProvided}>
                  {ipfs.targetSale / ipfs.salePrice} {ipfs.symbol}
                </span>
              </div>
              <div className={styles.progressBarContainer}>
                <span
                  className={styles.progressIndicator}
                  style={{ width: `${progressWidth}` }}
                ></span>
              </div>
            </div>

            {active ? (
              <div className={styles.purchaseSection}>
                <button onClick={() => setPurchaseOpen(true)}>
                  Participate
                </button>
                <p>
                  You have bought{" "}
                  {userPurchase ? userPurchase / ipfs.salePrice : "0"}{" "}
                  {ipfs.tokenName}
                </p>
              </div>
            ) : (
              <div className={styles.purchaseSection}>
                <p>Participants: Limited</p>
                {time && time < ipfs.IDOdate ? (
                  <p>Presale starts in {date}</p>
                ) : time - 7200 > ipfs.IDOdate ? (
                  <p>Presale has ended</p>
                ) : (
                  <p>Presale ends in {date}</p>
                )}
              </div>
            )}
            {openPurchase && (
              <div className={styles.purchaseModal}>
                <IoIosCloseCircleOutline
                  className={styles.closeBtn}
                  onClick={() => setPurchaseOpen(false)}
                />
                <div className={styles.innerModal}>
                  <div className={styles.inputDiv}>
                    <input
                      className={styles.input}
                      placeholder="USDT Amount"
                      onChange={setAmount}
                    />
                  </div>
                  <button onClick={PurchaseAllocation}>
                    {trxProcess ? "Loading.." : "Purchase"}
                  </button>
                  <p className={styles.text}>Lorem Ipsum</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.informationSection}>
          <div className={styles.poolInformation}>
            <div className={styles.infoHeaders}>
              <p>Pool Information</p>
              <Image src="/square.svg" width={20} height={20} alt="square" />
            </div>
            <div className={styles.infoList}>
              <div>
                <p>Token Distribution:</p> <span>{distDate.toUTCString()}</span>
              </div>
              <div>
                <p>Minimum Allocation:</p> <span>$0.01</span>
              </div>
              <div>
                <p>Maximum Allocation:</p> <span>TBA</span>
              </div>
              <div>
                <p>Token Price:</p> <span>{ipfs.salePrice}</span>
              </div>
              <div>
                <p>Access Type:</p> <span>{ipfs.accessType}</span>
              </div>
            </div>
          </div>
          <div className={styles.poolInformation}>
            <div className={styles.infoHeaders}>
              <p>Token Information</p>
              <Image src="/square.svg" width={20} height={20} alt="square" />
            </div>
            <div className={styles.infoList}>
              <div>
                <p>Token Name</p> <span>{ipfs.tokenName}</span>
              </div>
              <div>
                <p>Symbol</p> <span>{ipfs.symbol}</span>
              </div>
              <div>
                <p>Decimal</p> <span>{ipfs.decimals}</span>
              </div>
              <div>
                <p>Contract Address</p> <span>TBA</span>
              </div>
              <div>
                <p>Total Supply</p>{" "}
                <span>{ipfs.totalSupply.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {errorModal && (
        <div className={styles.errorModalContainer}>
          <div className={styles.errorModal}>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { launch } = params;
  let url = `${contracts.queryHost}/api/launchpad/${launch}`;
  const ipfs = await fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error();
    });
  return { props: { ipfs, launch } };
}
