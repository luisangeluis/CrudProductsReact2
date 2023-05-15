import { useDispatch } from "react-redux";
//Styles
import styles from "./ConfirmationDialog.module.scss";
//Slices
import { deleteProduct } from "@/store/slices/products.slice";

const ConfirmationDialog = ({ message, itemId, setIsOpen }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteProduct(itemId));
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