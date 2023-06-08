import { useEffect, useRef, useState } from 'react';
import { AiOutlineMenu, AiFillPlusCircle } from 'react-icons/ai'
import { useRouter } from 'next/router';
//Styles
import styles from "./Header.module.scss";
//Components
import Link from 'next/link'
import Image from 'next/image';

const Header = () => {
  const [sizeWindow, setSizeWindow] = useState({});
  const [isOpenNav, setIsOpenNav] = useState(false);
  const headerRef = useRef(null);
  const navbar = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      headerRef.current?.classList.add(`${styles.headerEfect}`);
      // headerRef.current?.style.backgroundImage="linear-gradient(190deg, var(--color-three-2), var(--color-three), var(--color-three-3));"
      // console.log(headerRef.current.style.backgroundImage);
      setTimeout(() => {
        headerRef.current?.classList.remove(`${styles.headerEfect}`);
      }, 1800);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])


  useEffect(() => {
    handleResize();

    addEventListener("resize", () => {
      handleResize();
      sizeWindow.width < 768 && navbar.current.classList.remove(`${styles.heightAuto}`);
    })

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleResize = () => {
    if (typeof window !== "undefined") {
      setSizeWindow({ width: window.innerWidth, height: window.innerHeight })
    }
  }

  const handleClickNav = () => navbar.current.classList.toggle(`${styles.heightAuto}`);
  const handleClick = () => router.push("/post");

  return (
    <>
      <header className={styles.header} ref={headerRef}>
        <div className={styles.logoSection}>
          <div className={styles.mainLink}>
            <Link href="/">CRUD</Link>
          </div>
          {sizeWindow.width < 768 && (
            <button onClick={handleClickNav}
              className={styles.toogleButton}
            >
              <AiOutlineMenu size={"100%"} />
            </button>)
          }
        </div>
        <nav className={`${styles.navbar}`} ref={navbar}>
          <ul>
            <button onClick={handleClick}><AiFillPlusCircle />Add a product</button>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;
