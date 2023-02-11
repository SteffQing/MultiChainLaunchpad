import styles from "./styles/Subheader.module.css";
import Wheel1 from "../Asset/MobBackgroundImg1";
import HalveWheel from "../asset/MobBackgroundImg3";
import Halvemoon from "../asset/MobBackgroundImg2";

export default function Subheader() {
  return (
    <div className={styles.container}>
      <div className={styles.background1}>
        <Wheel1/>
      </div>
      <div className={styles.background2}>
        <Halvemoon />
      </div>
      <div className={styles.background3}>
        < HalveWheel/>
      </div>
      <div className={styles.text}>
        <h1>Join the Team</h1>
        <p>Create your own personal profile</p>
      </div>
    </div>
  );
}
