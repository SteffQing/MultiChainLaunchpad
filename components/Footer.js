import styles from "./footer.module.css";
import { BsTwitter, BsTelegram, BsMedium } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.main}>
      <div className={styles.footer}>
        <div className={styles.project}>
          <h4>TexoStarter</h4>
          <p>
            Get early mover advantage to Innovative products on the EVM Chain.
            Interoperability at the core of development
          </p>
          <div className={styles.iconSocial} style={{ display: "flex" }}>
            <Link href="https://twitter.com/texostarter">
              <a>
                <BsTwitter />
              </a>
            </Link>
            <Link href="https://t.me/texostarter">
              <a>
                <BsTelegram />
              </a>
            </Link>
          </div>
        </div>
        <aside>
          <div className={styles.company}>
            <h5>Protocol</h5>
            <p>
              <a href="#">About Us</a>
            </p>
            <p>
              <a
                href="https://docs.texostarter.com/launchpad"
                target="_blank"
                rel="noopener noreferrer"
              >
                Services
              </a>
            </p>
            <p>
              <a href="#">Portfolio</a>
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
                href="https://t.me/serratim"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support{" "}
              </a>
            </p>
            <p>
              <a
                href="https://t.me/serratim"
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
        <p>Copyright &copy; 2022 TexoStarter</p>
      </div>
    </footer>
  );
}
