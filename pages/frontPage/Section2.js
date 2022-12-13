import styles from "./Section2.module.css";
import Image from "next/image";
export default function Section2() {
  return (
    <div className={styles.container}>
        <h4>Built on</h4>
        <div className={styles.Card}>
            <Image src="/exosama.svg" width={50} height={50} alt="image"/>
            <p>ExoSama Network</p>
        </div>
    </div>
  );
}
