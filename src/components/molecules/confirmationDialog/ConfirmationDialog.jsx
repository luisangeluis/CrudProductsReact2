import { useDispatch, useSelector } from "react-redux";
//Slices
import { deleteProduct } from "@/store/slices/products.slice";
//Styles
import styles from "./ConfirmationDialog.module.scss";
import { useRouter } from "next/router";

const ConfirmationDialog = ({ message, itemId, setIsOpen }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  const handleClick = () => {
    dispatch(deleteProduct(itemId));
    // setIsOpen(false);
  }

  return (
    <div className={styles.confirmationDialogContainer}>
      <h3>{message}</h3>
      <div className={styles.btnSecction}>
        <button className={styles.btn} onClick={handleClick}>Yes</button>
        <button className={styles.btn} onClick={() => setIsOpen(false)}>No</button>
      </div>
    </div>
  )
}

export default ConfirmationDialog