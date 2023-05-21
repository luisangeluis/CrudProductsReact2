import { useEffect, useRef, useState } from 'react';
import { AiOutlineMenu,AiFillPlusCircle } from 'react-icons/ai'
import { useRouter } from 'next/router';
//Styles
import styles from "./Header.module.scss";
//Components
import Link from 'next/link'
import Image from 'next/image';

const Header = () => {
  const [sizeWindow, setSizeWindow] = useState({});
  const [isOpenNav, setIsOpenNav] = useState(false);
  const navbar = useRef(null);
  const router = useRouter();

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
      <header className={styles.header}>
        <div className={styles.logoSection}>
          <Link href="/">
            <Image src="/img/temporalImage.jpg" width={800} height={800} alt="temporal-image"
              className={styles.logo}
            />
          </Link>
          {sizeWindow.width < 768 && (
            <button onClick={handleClickNav}
              className={styles.toogleButton}
            >
              <AiOutlineMenu size={"100%"}/> 
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
