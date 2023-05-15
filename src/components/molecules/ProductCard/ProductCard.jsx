import { useState } from "react";
import { useDispatch } from "react-redux";
//Slices
import { deleteProduct } from "@/store/slices/products.slice";
//Utils
import firstMayusc from "@/utils/firstMayusc";
//Styles
import styles from "./ProductCard.module.scss";
//Components
import Image from "next/image";
import ModalContainer from "@/components/organisms/modalContainer/ModalContainer";
import ConfirmationDialog from "../confirmationDialog/ConfirmationDialog";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const handleClickDelete = () => {
    // dispatch(deleteProduct(product.id));
    setIsOpenDialog(true);
  }

  return (
    <>
      <article className={styles.card}>
        <div className={styles.cardBody}>
          <div className={styles.imageContainer}>
            <Image src="/img/temporalImage.jpg" className={styles.cardImage} width={1000} height={1000}
              alt="temporal-image" />
          </div>
          <h3 className={styles.cardTitle}>{firstMayusc(product.name)}</h3>
          <p className={styles.cardText}>{firstMayusc(product.description)}</p>
          <h4 className={styles.cardSubtitle}>${product.price}</h4>
        </div>
        <div className={styles.cardFooter}>
          <button onClick={handleClickDelete} className={styles.cardBtn}>Delete</button>
          <button className={styles.cardBtn}>Edit</button>
        </div>
      </article>
      <ModalContainer isOpen={isOpenDialog} setIsOpen={setIsOpenDialog}>
        <ConfirmationDialog message="Are you sure you want to delete this item?" setIsOpen={setIsOpenDialog}
          itemId={product.id} />
      </ModalContainer>
    </>
  )
}

export default ProductCard;