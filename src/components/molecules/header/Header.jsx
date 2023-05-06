import Link from 'next/link'
//Styles
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={styles.Navbar}>
      <div className={styles.navbarContainer}>
        <Link href="/">CRUD</Link>
        <nav>
          <ul>
            <Link href="/">Add a product</Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
