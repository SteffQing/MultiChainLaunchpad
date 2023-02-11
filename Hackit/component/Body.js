import { useEffect, useState } from "react";
import styles from "./styles/Subheader.module.css";
import { Array } from "../asset/Index";
import Image from "next/image";

export default function Body() {
    const [checkboxValues, setCheckboxValues] = useState([]);
    const [mainArray, setMainArray] = useState(Array.slice(0,20))
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        if (checked) {
          setCheckboxValues([...checkboxValues, name]);
         
        } else {
          setCheckboxValues(checkboxValues.filter((value) => value !== name));
        }
      };
      console.log(checkboxValues);
      const showMore = ()=>{
        setMainArray(Array);
      }
      const showLess =()=>{
        setMainArray(Array.slice(0,20))
      }
      useEffect(()=>{

      })
  return (
    <div className={styles.body}>
      <div className={styles.text}>
        <h1>Based on your skills</h1>
        <p>You can Select multiple skills</p>
      </div>
      <div className={styles.skillsContainer}>
        {mainArray.map((skill, I) => {
          return (
            <div key={I} className={styles.skills}>
              <div className={styles.Icon}>
                <Image src={skill.Icon} width={20} height={20} alt="" />
              </div>
              <p>{skill.name}</p>
              <input
                type="checkbox"
                id="check-23"
                className={styles.checkbox}
                name={skill.name}
                onChange={handleCheckboxChange}
              />
            </div>
          );
        })}
        <div onClick={showMore}>See more</div>
      </div>
    </div>
  );
}
{
  /* <div key={I}></div>; */
}
