import styles from "./AnimatedBg.module.scss";

const AnimatedBg = ({ children }) => {
  return (
    <section className={styles.animatedBgContainer}>
      <div className={styles.box}>
        {children}
        <div>hola</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

export default AnimatedBg;