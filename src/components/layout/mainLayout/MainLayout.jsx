import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Utils
import getTheme from '@/utils/getTheme';
//Slices
import { setTheme } from '@/store/slices/theme.slice';
//Styles
import styles from "./MainLayout.module.scss";
//Components
import Aside from '../../molecules/aside/Aside'
import Header from '../../molecules/header/Header'
import Footer from '../../molecules/footer/Footer'

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  useEffect(() => {
    dispatch(setTheme(getTheme()))

  }, [])

  return (
    <div className={`${styles.mainLayout} ${theme === "dark" && "dark"}`}>
      <div className={styles.container}>
        <Aside />
        <Header />
        <main className={styles.main}>
          <div className={"container"}>
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout;
