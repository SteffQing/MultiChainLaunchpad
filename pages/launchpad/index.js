import Image from "next/image";
import heroImage from "../../assets/launchpadHeroImage.svg";
import styles from "../../styles/launchpad.module.css";
import IDOCard from "../../components/IdoCard";
import { contracts } from "../../constants/ABIs";
import Link from "next/link";
export default function LaunchPad({ data }) {
  // const array = data.IDOcontracts;
  const array = ["0xf75150d730CE97C1551e97df39c0A049024e4C25"];
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1>Launchpad for access to Homing-ground Web3 Projects</h1>
        <div className={styles.heroImageContainer}>
          <Image
            src={heroImage}
            objectFit="contain"
            layout="fill"
            alt="Hero Image"
          />{" "}
        </div>
      </div>
      <div className={styles.intro}>
        <div className={styles.introContent}>
          <div className={styles.container}>
            <aside>
              <i className={styles.content}>Getting started</i>
              <h3>Rules of participation</h3>{" "}
              <p>
                All information regarding cost and value of access to the
                launchpad
              </p>
            </aside>{" "}
            <aside>Follow</aside>
          </div>
          <div className={styles.container}>
            <aside>
              <i className={styles.content}>Getting started</i>
              <h3>Application of TEXO</h3>{" "}
              <p>The utility of TEXO in the launchpad</p>
            </aside>{" "}
            <aside>Enter</aside>
          </div>
          <div className={styles.container}>
            <aside>
              <i className={styles.content}>Getting started</i>
              <h3>Apply for launch</h3>{" "}
              <p>New and coming Web3 focused projects </p>
            </aside>{" "}
            <aside>Apply</aside>
          </div>
        </div>
      </div>
      <div className={styles.poolSection}>
        <h2>Upcoming Pools</h2>
        <div className={styles.pools}>
          {array.length > 0 ? (
            array.map((address) => (
              <Link
                href={`/launchpad/${address}`}
                key={address}
                className={styles.pool}
              >
                <a className={styles.pool}>
                  <i className={styles.design}></i>
                  <div className={styles.timeTag}>
                    <p>TBA</p>
                  </div>
                  <IDOCard contract={address} />
                </a>
              </Link>
            ))
          ) : (
            <div className={styles.notAddress}>
              No Upcoming launches yet. Stay tuned
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

// export async function getServerSideProps() {
//   let url = `${contracts.queryHost}/api/loadFactory`;
//   const data = await fetch(url)
//     .then((res) => res.json())
//     .catch((err) => {
//       throw new Error();
//     });
//   return { props: { data } };
// }
