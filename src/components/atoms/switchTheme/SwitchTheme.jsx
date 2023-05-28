"use client"
import { useEffect, useRef, useState } from "react";
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
//Styles
import styles from "./SwitchTheme.module.scss";
// import { get } from "react-hook-form";

const SwitchTheme = () => {
  const switchRef = useRef(null);
  // let theme = "";
  const [switchValue, setSwitchValue] = useState();


  useEffect(() => {
    getTheme();
  }, [])

  const getTheme = () => {
    if (typeof window !== 'undefined') {
      setSwitchValue(localStorage.getItem('theme'));
    }
  }

  const handleClick = () => {
    if (switchValue === "dark") {
      localStorage.setItem("theme", "")
      setSwitchValue("")
    } else {
      localStorage.setItem("theme", "dark")
      setSwitchValue("dark")
    }
  }

  return (
    <div className={styles.btnThemeContainer}>
      <button onClick={handleClick} >
        <span><BsFillSunFill /></span>
        <span><BsMoonFill /></span>
        <div className={`${styles.switch} ${switchValue === "dark" && styles.dark} `} ref={switchRef}></div>
      </button>
    </div>
  )
}

export default SwitchTheme
