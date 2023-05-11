import styles from "./ModalContainer.module.scss";

const ModalContainer = ({ children, isOpen, setIsOpen }) => {

  const handleClick = () => setIsOpen(false);

  if (!isOpen) return false;

  return (
    <section className={styles.ModalContainer}>
      <div className={styles.modalBody}>
        <div className={styles.closeSection}>
          <button onClick={handleClick}>X</button>
        </div>
        {children}
      </div>
    </section>

  )
}

export default ModalContainer