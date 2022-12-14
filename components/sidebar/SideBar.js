import React from "react";
import styles from "./SideBar.module.css";
import { useState } from "react";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi"; //Home
import { GiMissileLauncher } from "react-icons/gi"; //launchpad
import { RiExchangeFundsFill } from "react-icons/ri"; //stake
import { AnimatePresence, motion } from "framer-motion";

export default function SideBar({ open, handleClick }) {
  //framer motion state
  const sidebarVariants = {
    sidebarOpen: {
      width: "18vw",
      transition: {
        duration: 0.7,
      },
    },

    sidebarClosed: {
      width: "5vw",
      transition: {
        duration: 0.7,
      },
    },
  };

  ///new states and handlers
  //states
  const [LaunchPadMenu, setLaunchPadMenu] = useState(false);
  const [liquidityMenu, setLiquidityMenu] = useState(false);
  //states handlers
  const HandleLiquidityMenu = () => {
    setLiquidityMenu(!liquidityMenu);
  };
  const HandleLaunchPadMenu = () => {
    setLaunchPadMenu(!LaunchPadMenu);
  };

  // Icons Hover Startes
  const [HomeLabel, setHomeLable] = useState(false);
  const [LaunchPadLable, setLaunchPadLabel] = useState(false);
  const [stakingLabel, setStakingLabel] = useState(false);
  //handlers for icons hover
  const HandleHomeLabel = () => {
    setHomeLable(!HomeLabel);
  };
  const HandleLaunchPadLabel = () => {
    setLaunchPadLabel(!LaunchPadLable);
  };
  const HandlestakingLabel = () => {
    setStakingLabel(!stakingLabel);
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      marginLeft: "100vw",
    },
    open: {
      opacity: 1,
      marginLeft: "0",
    },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };
  return (
    <motion.div
      className={styles.sideBar}
      variants={sidebarVariants}
      animate={open ? "sidebarOpen" : "sidebarClosed"}
      transition={"transition"}
    >
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={sideVariants}
        className={styles.NavLinks}
      >
        <motion.div className={styles.sidebarNavs} variants={itemVariants}>
          <div
            onClick={handleClick}
            onMouseOver={!open && HandleHomeLabel}
            onMouseOut={HomeLabel && HandleHomeLabel}
            className={styles.sideBarNavIcons}
          >
            <HiOutlineHome fontSize="1.5rem" />
            {!open && HomeLabel && <div>Home</div>}
          </div>
          {open && (
            <div className={styles.sideBarNavTex}>
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                whileTap={{ scale: 0.85 }}
                initial={{ marginLeft: "7vw", opacity: 0, color: "black" }}
                animate={{ marginLeft: "0vw", opacity: 1, color: "white" }}
                exit={{
                  marginLeft: "20vh",
                  transition: { duration: 3, delay: 2 },
                }}
                transition={{ duration: 0.8 }}
              >
                <Link href="/">
                  <a>Home</a>
                </Link>{" "}
              </motion.div>
            </div>
          )}
        </motion.div>
        <motion.div className={styles.sidebarNavs} variants={itemVariants}>
          <div
            onClick={handleClick}
            className={styles.sideBarNavIcons}
            onMouseOver={!open && HandleLaunchPadLabel}
            onMouseOut={LaunchPadLable && HandleLaunchPadLabel}
          >
            <GiMissileLauncher fontSize="1.5rem" />
            {!open && LaunchPadLable && <div>Launchpad</div>}
          </div>
          {open && (
            <div className={styles.sideBarNavTex}>
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                whileTap={{ scale: 0.85 }}
                initial={{ marginLeft: "9vw", opacity: 0, color: "black" }}
                animate={{ marginLeft: "0vw", opacity: 1, color: "white" }}
                exit={{
                  marginLeft: "20vh",
                  transition: { duration: 3, delay: 2 },
                }}
                transition={{ duration: 1.15 }}
                onClick={HandleLaunchPadMenu}
              >
                <p>LaunchPad</p>
              </motion.div>
              <AnimatePresence>
                {LaunchPadMenu && (
                  <motion.div
                    className={styles.productNavList}
                    initial={{ opacity: 0, y: "-50%" }}
                    animate={{ opacity: 1, y: "0%" }}
                    exit={{
                      opacity: 0,
                      y: "-50%",
                      transition: { duration: "0.35" },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: "150",
                      duration: "0.75",
                    }}
                  >
                    <Link href="/launchpad">
                      <a>Go to App</a>
                    </Link>
                    <Link href="https://t.me/serrafin">
                      <a>Apply for IDO</a>
                    </Link>
                    <Link href="https://docs.texostarter.com">
                      <a>How to participate</a>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
        <motion.div variants={itemVariants} className={styles.sidebarNavs}>
          <div
            className={styles.sideBarNavIcons}
            onMouseOver={!open && HandlestakingLabel}
            onMouseOut={stakingLabel && HandlestakingLabel}
          >
            <RiExchangeFundsFill fontSize="1.5rem" />
            {!open && stakingLabel && <div>Staking</div>}
          </div>
          {open && (
            <div className={styles.sideBarNavTex}>
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                whileTap={{ scale: 0.85 }}
                initial={{ marginLeft: "12vw", opacity: 0, color: "black" }}
                animate={{ marginLeft: "0vw", opacity: 1, color: "white" }}
                exit={{
                  marginLeft: "20vh",
                  transition: { duration: 3, delay: 2 },
                }}
                transition={{ duration: 1.8 }}
                onClick={HandleLiquidityMenu}
              >
                <p>Staking</p>{" "}
              </motion.div>
              <AnimatePresence>
                {liquidityMenu && (
                  <motion.div
                    className={styles.productNavList}
                    initial={{ opacity: 0, y: "-50%" }}
                    animate={{ opacity: 1, y: "0%" }}
                    exit={{
                      opacity: 0,
                      y: "-50%",
                      transition: { duration: "0.35" },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: "150",
                      duration: "0.75",
                    }}
                  >
                    <Link href="/staking">
                      <a>Open App</a>
                    </Link>
                    <Link href="https://samaswap.com/#/pool/v2">
                      <a target="_blank" rel="noopener noreferrer">
                        Create Liquidity pool
                      </a>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
        <div className={styles.absoluteElements}>
          {open && (
            <>
              <Link href="https://docs.texostarter.com">
                <a target="_blank" rel="noopener noreferrer">
                  Docs
                </a>
              </Link>
              <Link href="https://docs.texostarter.com">
                <a target="_blank" rel="noopener noreferrer">
                  About
                </a>
              </Link>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
