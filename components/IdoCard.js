import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/launchpad.module.css";
import { contracts } from "../constants/ABIs";

export default function IDOCard({ contract }) {
  const [IdoData, setIdoData] = useState(null);
  useEffect(() => {
    const main = async () => {
      let url = `${contracts.queryHost}/api/launchpad/${contract}`;
      const data = await fetch(url)
        .then((res) => res.json())
        .catch((err) => {
          throw new Error();
        });
      console.log(data);
      data && setIdoData(data);
    };
    main();
  }, [contract]);
  return (
    <>
      {IdoData ? (
        <div className={styles.pool}>
          <div className={styles.head}>
            <aside>
              <div className={styles.image}>
                <Image
                  src={IdoData.image}
                  objectFit="cover"
                  layout="fill"
                  alt={IdoData.name}
                />
              </div>
              <h2>{IdoData.name}</h2>
            </aside>
          </div>
          <div className={styles.description}>
            <p>{IdoData.description.substring(0, 100)}...</p>
          </div>
          <div className={styles.footer}>
            <hr />
            <div>
              <aside>
                <p>${IdoData.targetSale.toLocaleString()}</p>
                <span>Target</span>
              </aside>
              <aside>
                <p>{IdoData.accessType}</p>
                <span>Type</span>
              </aside>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.error}>Coming Soon</div>
      )}
    </>
  );
}
