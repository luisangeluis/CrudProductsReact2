import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.cardImage}></div>
        <h3 className={styles.cardTitle}>title</h3>
        <p className={styles.cardText}></p>
        <h4 className={styles.cardSubtitle}></h4>
      </div>
      <div className={styles.cardFooter}>footer</div>
    </article>
  )
}

export default ProductCard;