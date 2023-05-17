import { useState } from "react";
import { useDispatch } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
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
import FormProduct from "../formProduct/FormProduct";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [isOpenFormProduct, setIsOpenFormProduct] = useState(false);

  const handleClickDelete = () => {
    setIsOpenDialog(true);
  }

  const handleClickEdit = () => setIsOpenFormProduct(true);

  return (
    <>
      <article className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src="/img/temporalImage.jpg" className={styles.cardImage} width={1000} height={1000}
            alt="temporal-image" />
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardInfo}>

            <h3 className={styles.cardTitle}>{firstMayusc(product.name)}</h3>
            <p className={styles.cardText}>{firstMayusc(product.description)}</p>
            <h4 className={styles.cardSubtitle}>${product.price}</h4>
          </div>
          <div className={styles.btnSection}>
            <button onClick={handleClickDelete} className={styles.cardBtn}>
              <BsFillTrashFill size={"100%"} title="Delete" />
            </button>
            <button onClick={handleClickEdit} className={styles.cardBtn} title="Edit">
              <FaPencilAlt />Edit
            </button>
          </div>
        </div>
        {/* <div className={styles.cardFooter}>
        </div> */}
      </article>
      <ModalContainer isOpen={isOpenDialog} setIsOpen={setIsOpenDialog}>
        <ConfirmationDialog message="Are you sure you want to delete this item?" setIsOpen={setIsOpenDialog}
          itemId={product.id} />
      </ModalContainer>
      <ModalContainer isOpen={isOpenFormProduct} setIsOpen={setIsOpenFormProduct}>
        <FormProduct product={product} setIsOpen={setIsOpenFormProduct} />
      </ModalContainer>
    </>
  )
}

export default ProductCard;