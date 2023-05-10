import { useEffect, useState } from 'react';
//Styles
import styles from "./Header.module.scss";
//Components
import Link from 'next/link'

const Header = () => {
  const [sizeWindow, setSizeWindow] = useState({ width: 0, height: 0 });

  useEffect(() => {
    getSizeWindow();

    addEventListener("resize", () => getSizeWindow())

    return () => window.removeEventListener("resize", getSizeWindow)
  }, [])

  const getSizeWindow = () => {
    if (typeof window !== "undefined") {
      setSizeWindow({ width: window.innerWidth, height: window.innerHeight })
    }
  }

  return (
    <header className={styles.header}>
      <Link href="/">LOGO</Link>
      {sizeWindow.width < 768 && <button>click</button>}
      <nav className={styles.navbar}>
        <ul>
          <Link href="/">Add a product</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
