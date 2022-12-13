import styles from "./footer.module.css";
import { BsTwitter, BsTelegram, BsMedium } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.main}>
      <div className={styles.footer}>
        <div className={styles.project}>
          <h4>Amestarter</h4>
          <p>
            Your unlimited access card to a Web3.0 ecosystem of infinite
            possibilities built for the Blockchain.
          </p>
          <div className={styles.iconSocial} style={{ display: "flex" }}>
            <Link href="https://twitter.com/amestarter">
              <a>
                <BsTwitter />
              </a>
            </Link>
            <Link href="https://t.me/amestarter">
              <a>
                <BsTelegram />
              </a>
            </Link>
            <Link href="https://medium.com/amestarter">
              <a>
                <BsMedium />
              </a>
            </Link>
          </div>
        </div>
        <aside>
          <div className={styles.company}>
            <h5>Company</h5>
            <p>
              <a href="#" target="_blank" rel="noopener noreferrer">
                About Us
              </a>
            </p>
            <p>
              <a
                href="https://docs.amestarter.com/products"
                target="_blank"
                rel="noopener noreferrer"
              >
                Services
              </a>
            </p>
            <p>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
            </p>
          </div>
          <div className={styles.socials}>
            <h5>Contact</h5>
            <p>
              <a
                href="https://forms.gle/Xp7BMev8qCko5aMU7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply for Listing
              </a>
            </p>
            <p>
              <a
                href="mailto:support@amestarter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support{" "}
              </a>
            </p>
            <p>
              <a
                href="mailto:business@amestarter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Partnerships
              </a>
            </p>
          </div>
        </aside>
      </div>

      <div className={styles.footer2}>
        <p>Copyright &copy; 2022 Amestarter</p>
      </div>
    </footer>
  );
}
