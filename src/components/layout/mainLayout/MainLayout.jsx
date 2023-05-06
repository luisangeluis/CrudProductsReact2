import Aside from '../../molecules/aside/Aside'
import Header from '../../molecules/header/Header'
import Footer from '../../molecules/footer/Footer'
//Styles
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }) => {

  return (
    <div className={styles.mainLayout}>
      <div className={styles.container}>
        <Aside />
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout;
