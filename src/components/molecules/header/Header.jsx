import { useEffect, useRef, useState } from 'react';
//Styles
import styles from "./Header.module.scss";
//Components
import Link from 'next/link'
import Image from 'next/image';
import ModalContainer from '@/components/organisms/modalContainer/ModalContainer';
import FormProduct from '../formProduct/FormProduct';

const Header = () => {
  const [sizeWindow, setSizeWindow] = useState({});
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navbar = useRef(null);

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

  const handleClickNav = () => {
    navbar.current.classList.toggle(`${styles.heightAuto}`);
  }

  const handleClickModal = () => setIsOpenModal(!isOpenModal);

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
              click
            </button>)
          }
        </div>
        <nav className={`${styles.navbar}`} ref={navbar}>
          <ul>
            <button onClick={handleClickModal}>Add a product</button>
          </ul>
        </nav>
      </header>
      <ModalContainer isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
        <FormProduct setIsOpen={setIsOpenModal}/>
      </ModalContainer>
    </>
  )
}

export default Header;
