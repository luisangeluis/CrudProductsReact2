import styles from "./PopUp.module.scss";

const PopUp = ({ message }) => {
  return (
    <span className={styles.span}>{message}</span>
  )
}

export default PopUp