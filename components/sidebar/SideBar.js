import React from "react";
import styles from "./SideBar.module.css";
import { useState } from "react";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi"; //Home
import { GiMissileLauncher } from "react-icons/gi"; //launchpad
import { RiExchangeFundsFill } from "react-icons/ri"; //stake
import { AiOutlineFundProjectionScreen } from "react-icons/ai"; //index fund
import { BiCoinStack } from "react-icons/bi"; //liquidity
import { AnimatePresence, motion } from "framer-motion";

export default function SideBar({ open, handleClick }) {
  //framer motion state
  const sidebarVariants = {
    sidebarOpen: {
      width: "18vw",
      transition: {
        duration: 1,
      },
    },

    sidebarClosed: {
      width: "100%",
      transition: {
        duration: 1,
      },
    },
  };

  ///new states and handlers
  //states
  const [LaunchPadMenu, setLaunchPadMenu] = useState(false);
  const [liquidityMenu, setLiquidityMenu] = useState(false);
  const [stakingMenu, setStakingMenu] = useState(false);
  const [IndexFundMenu, setIndexFundMenu] = useState(false);
  //states handlers
  const HandleLiquidityMenu = () => {
    setLiquidityMenu(!liquidityMenu);
  };
  const HandleLaunchPadMenu = () => {
    setLaunchPadMenu(!LaunchPadMenu);
  };
  const HandleStakingMenu = () => {
    setStakingMenu(!stakingMenu);
  };
  const HandleIndexFundMenu = () => {
    setIndexFundMenu(!IndexFundMenu);
  };

  // Icons Hover Startes
  const [HomeLabel, setHomeLable] = useState(false);
  const [LaunchPadLable, setLaunchPadLabel] = useState(false);
  const [liquidityLabel, setLiquidityLabel] = useState(false);
  const [stakingLabel, setStakingLabel] = useState(false);
  const [indexFundLabel, setIndexFundLabel] = useState(false);
  const [aboutLabel, setAboutLabel] = useState(false);
  const [docsLabel, setDocsLabel] = useState(false);
  //handlers for icons hover
  const HandleHomeLabel = () => {
    setHomeLable(!HomeLabel);
  };
  const HandleLaunchPadLabel = () => {
    setLaunchPadLabel(!LaunchPadLable);
  };
  const HandleliquidityLabel = () => {
    setLiquidityLabel(!liquidityLabel);
  };
  const HandlestakingLabel = () => {
    setStakingLabel(!stakingLabel);
  };
  const HandleIndexFundLabel = () => {
    setIndexFundLabel(!indexFundLabel);
  };

  //framer motion variants
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

  //icons styleing

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
                    <span>Go to App</span>
                    <span>Apply for IDO</span>
                    <span>IDO staking</span>
                    <span>How to participate</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
        <motion.div variants={itemVariants} className={styles.sidebarNavs}>
          <div
            className={styles.sideBarNavIcons}
            onMouseOver={!open && HandleliquidityLabel}
            onMouseOut={liquidityLabel && HandleliquidityLabel}
          >
            <BiCoinStack fontSize="1.5rem" />
            {!open && liquidityLabel && <div>Liquidity</div>}
          </div>
          {open && (
            <div className={styles.sideBarNavTex}>
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                whileTap={{ scale: 0.85 }}
                initial={{ marginLeft: "11vw", opacity: 0, color: "black" }}
                animate={{ marginLeft: "0vw", opacity: 1, color: "white" }}
                exit={{
                  marginLeft: "20vh",
                  transition: { duration: 3, delay: 2 },
                }}
                transition={{ duration: 1.4 }}
                onClick={HandleStakingMenu}
              >
                <p>Staking</p>
              </motion.div>
              {stakingMenu && (
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
                  <Link href="#">
                    <a>
                      <span>Go to App</span>
                    </a>
                  </Link>
                </motion.div>
              )}
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
                <p>Liquidity</p>{" "}
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
                    <span>Open App</span>
                    <span>Create Liquidity pool</span>
                    <span>How it works</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
        <motion.div className={styles.sidebarNavs} variants={itemVariants}>
          <div
            onClick={handleClick}
            className={styles.sideBarNavIcons}
            onMouseOver={!open && HandleIndexFundLabel}
            onMouseOut={indexFundLabel && HandleIndexFundLabel}
          >
            <AiOutlineFundProjectionScreen fontSize="1.5rem" />
            {!open && indexFundLabel && <div>IndexFund</div>}
          </div>
          {open && (
            <div className={styles.sideBarNavTex}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                initial={{ marginLeft: "9vw", opacity: 0, color: "black" }}
                animate={{ marginLeft: "0vw", opacity: 1, color: "white" }}
                exit={{
                  marginLeft: "20vh",
                  transition: { duration: 3, delay: 2 },
                }}
                transition={{ duration: 1.15 }}
                onClick={HandleIndexFundMenu}
              >
                <Link href="#">
                  <p>IndexFund</p>
                </Link>
              </motion.div>
              <AnimatePresence>
                {IndexFundMenu && (
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
                    <span>Open App</span>
                    <span>How it works</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
        {open && (
          <div className={styles.absoluteElements}>
            <>
              <div>Docs</div>
              <div>About</div>
            </>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
