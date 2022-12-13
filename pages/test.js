import Link from 'next/link';
import styles from "../styles/Connect.module.css"
import {  AnimatePresence, motion, useCycle } from 'framer-motion';
import { useState } from 'react';

import { IoHome } from "react-icons/io5"; //Home
import { GrMoney } from "react-icons/gr";   //staking
import { GrLaunch } from "react-icons/gr"; //Launcpad
import { GiReceiveMoney } from "react-icons/gi";  //liquidity
import { GiTakeMyMoney } from "react-icons/gi"; //index fund
import { FcAbout } from "react-icons/fc"; //about
import { SiReadthedocs } from "react-icons/si"; //docs

export default function Test() {
  // const add = async () => {
  //   let url = "http://localhost:3000/api/hello";
  //   let data = await fetch(url).then((res) => res.json());
  //   console.log(data);
  // };

  const itemVariants = {
    closed: {
      opacity: 0,
      marginLeft: "100vw",
    },
    open: { 
            opacity: 1,
            marginLeft: "0",
          }
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1
      }
    }
  };






     //states
     const [LaunchPadMenu, setLaunchPadMenu] = useState(false);
     const [liquidityMenu, setLiquidityMenu] = useState(false);
     const [stakingMenu, setStakingMenu] = useState(false);
     const [IndexFundMenu, setIndexFundMenu] = useState(false)
     //states handlers
     const HandleLiquidityMenu = () => {
       setLiquidityMenu(!liquidityMenu)
     }
     const HandleLaunchPadMenu = () => {
         setLaunchPadMenu(!LaunchPadMenu)
     }
     const HandleStakingMenu = () => {
         setStakingMenu(!stakingMenu)
     }
     const HandleIndexFundMenu = () => {
       setIndexFundMenu(!IndexFundMenu)
   }
   
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
           setHomeLable(!HomeLabel)
       }
       const HandleLaunchPadLabel = () => {
           setLaunchPadLabel(!LaunchPadLable)
       }
       const HandleliquidityLabel = () => {
           setLiquidityLabel(!liquidityLabel)
       }
       const HandlestakingLabel = () => {
           setStakingLabel(!stakingLabel)
       }
       const HandleIndexFundLabel = () => {
           setIndexFundLabel(!indexFundLabel)
       }
       const HandleAboutLabel = () => {
           setAboutLabel(!aboutLabel)
       }
       const HandleDocsLabel = () => {
           setDocsLabel(!docsLabel)
       }
   
   






  return (
    <div>
      <motion.div className={styles.sidebarNavs} variants={itemVariants}>
                    <div 
                        // onClick={handleClick} 
                        className={styles.sideBarNavIcons}
                        onMouseOver={open? " " : HandleLaunchPadLabel} 
                        onMouseOut={LaunchPadLable? HandleLaunchPadLabel: ""}>
                            <GiReceiveMoney/>
                            {
                            open? "" : LaunchPadLable && <div>Launchpad</div>
                            }
                    </div>
                    {
                        open && 
                        <div className={styles.sideBarNavTex}> 
                            <motion.div 
                                whileHover={{ scale: 1.1 }}
                                initial={{marginLeft: "9vw", opacity: 0, color:"black"}}
                                animate={{marginLeft:"0vw", opacity:1, color:"white"}}
                                exit={{marginLeft:"20vh", transition: {  duration: 3, delay:2 }}}
                                transition={{duration:1.15,  }} 
                                onClick={HandleLaunchPadMenu}>
                                    <Link href="#"><p>LaunchPad</p></Link>
                            </motion.div>
                            <AnimatePresence>
                                { LaunchPadMenu &&
                                    <motion.div 
                                            className={styles.productNavList}
                                            initial={{opacity:0,y:"-50%"}}
                                            animate={{opacity:1,y:"0%"}}
                                            exit={{opacity:0,y:"-50%",transition:{duration:"0.35"}}}
                                            transition={{type:"spring",stiffness:"150", duration:"0.75"}}>
                                        <span>Go to App</span>
                                        <span>Apply for IDO</span>
                                        <span>IDO staking</span>
                                        <span>How to participate</span>
                                    </motion.div>
                                }
                            </AnimatePresence>
                        </div>
                    }
                </motion.div>
    </div>
  );
}
