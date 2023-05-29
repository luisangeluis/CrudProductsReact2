"use client"
import { useRef } from "react";
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from '@/store/slices/theme.slice';

//Utils
import getTheme from "@/utils/getTheme";
//Styles
import styles from "./SwitchTheme.module.scss";

const SwitchTheme = () => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const switchRef = useRef(null);

  const handleClick = () => {
    let value = ""
    theme === "dark" ? value = "" : value = "dark";
    localStorage.setItem("theme", `${value}`)
    dispatch(setTheme(getTheme()));
  }

  return (
    <div className={styles.btnThemeContainer}>
      <button onClick={handleClick} >
        <span><BsFillSunFill /></span>
        <span><BsMoonFill /></span>
        <div className={`${styles.switch} ${theme === "dark" && styles.dark} `} ref={switchRef}></div>
      </button>
    </div>
  )
}

export default SwitchTheme
