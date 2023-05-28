import Aside from '../../molecules/aside/Aside'
import Header from '../../molecules/header/Header'
import Footer from '../../molecules/footer/Footer'
//Styles
import styles from "./MainLayout.module.scss";
import AnimatedBg from '@/components/organisms/animatedBg/AnimatedBg';

const MainLayout = ({ children }) => {

  return (
    <div className={styles.mainLayout}>
      <div className={styles.container}>
        <Aside />
        <Header />
        {/* <AnimatedBg> */}
        <main className={styles.main}>
          <div className={"container"}>
            {children}
          </div>
        </main>
        {/* </AnimatedBg> */}
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout;
