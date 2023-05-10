//Utils
import firstMayusc from "@/utils/firstMayusc";
//Styles
import styles from "./ProductCard.module.scss";
//Components
import Image from "next/image";

const ProductCard = ({ product }) => {
  // console.log(firstMayusc(product.name));
  return (
    <article className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.imageContainer}>
          <Image src="/img/temporalImage.jpg" className={styles.cardImage} width={1000} height={1000} alt="temporal-image"/>
        </div>
        <h3 className={styles.cardTitle}>{firstMayusc(product.name)}</h3>
        <p className={styles.cardText}>{firstMayusc(product.description)}</p>
        <h4 className={styles.cardSubtitle}>${product.price}</h4>
      </div>
      <div className={styles.cardFooter}>FOOTER</div>
    </article>
  )
}

export default ProductCard;