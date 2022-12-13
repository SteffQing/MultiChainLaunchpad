import styles from "./navbar.module.css";
import Link from "next/link";
import { useWeb3React } from "@web3-react/core";
import Connect from "../constants/Connect";
import { useState, useRef, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import useMediaQuery from "./hooks/useMediaQueryhooks";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, motion, useCycle } from "framer-motion";

export default function Navbar({
  open,
  handleClick,
  openMM,
  handleMobileClick,
}) {
  const { active } = useWeb3React();
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [openMobileSideBar, setMobileSideBarOpen] = useState(false);

  const menuMovement = {
    sidebarOpen: {
      marginLeft: "13vw",
      marginTop: ".5rem",
      transition: {
        duration: 1,
      },
    },

    sidebarClosed: {
      marginLeft: "0vw",
      marginTop: ".2rem",
      transition: {
        duration: 1,
      },
    },
  };

  const MobileSideBarHandler = () => {
    setMobileSideBarOpen(!openMobileSideBar);
  };

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <a className={styles.innerLogo}>
              {isDesktop ? (
                <>
                  <span>TexoStater</span>
                  {isDesktop && (
                    <motion.div
                      className={styles.hamburger}
                      variants={menuMovement}
                      initial={{ marginLeft: "0" }}
                      animate={open ? "sidebarOpen" : "sidebarClosed"}
                      transition={{ duration: 1, origin: 1 }}
                    >
                      {open ? (
                        <CgClose fontSize=".9em" onClick={handleClick} />
                      ) : (
                        <GiHamburgerMenu
                          fontSize=".8em"
                          onClick={handleClick}
                        />
                      )}
                    </motion.div>
                  )}
                </>
              ) : (
                <>
                  {openMM ? (
                    <CgClose />
                  ) : (
                    <GiHamburgerMenu onClick={handleMobileClick} />
                  )}
                  <span>TexoStater</span>
                </>
              )}
            </a>
          </Link>
        </div>
        <div className={styles.mobileFallback}>
          <div className={styles.connect}>
            <div className={styles.connectBtn}>
              <Connect />
            </div>
          </div>
        </div>
        <div className={styles.collections}>
          <Connect />
        </div>
      </nav>
    </div>
  );
}
