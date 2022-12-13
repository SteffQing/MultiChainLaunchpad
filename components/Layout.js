import Navbar from "./Nav";
import Footer from "./Footer";
import SideBar from "./sidebar/SideBar";
import styles from "./Layout.module.css";
import useMediaQuery from "./hooks/useMediaQueryhooks";
import { useState } from "react";
import MobileMenu from "./MobilesideBar/MobileMenu";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [openMM, cycleOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 960px)");

  //Handlers
  const handleClick = () => {
    setOpen(!open);
  };

  const handleMobileClick = () => {
    cycleOpen(!openMM);
  };
  return (
    <div className={styles.container}>
      <div className="styles.Navbar">
        <Navbar
          cycleOpen={cycleOpen}
          open={open}
          handleClick={handleClick}
          openMM={openMM}
          handleMobileClick={handleMobileClick}
        />
        {openMM && (
          <MobileMenu openMM={openMM} handleMobileClick={handleMobileClick} />
        )}
      </div>
      <div className={styles.Schildren}>
        {isDesktop && (
          <>
            <motion.div
              className={styles.deskTopSideBar}
              initial={{ width: "5vw" }}
              animate={{ width: open ? "18vw`" : "5vw" }}
            >
              <SideBar open={open} handleClick={handleClick} />
            </motion.div>
            <motion.div
              className={styles.children}
              initial={{ width: "100%", marginLeft: "35vw" }}
              animate={{ marginLeft: open ? "19.5vw" : "6.5vw" }}
              transition={{ duration: 0.7 }}
            >
              {children}
              <Footer />
            </motion.div>
          </>
        )}
        {isDesktop ? (
          ""
        ) : (
          <motion.div
            className={styles.children}
            transition={{ duration: 0.8 }}
          >
            {children}
            <Footer />
          </motion.div>
        )}
      </div>
    </div>
  );
}
