import { useRouter } from "next/router";
//Styles
import styles from "./ConfirmationDialog.module.scss";
//Hooks
import useDeleteProductById from "@/hooks/useDeleteProductById";

const ConfirmationDialog = ({ message, itemId, setIsOpen }) => {
  const router = useRouter();
  const { deleteProduct } = useDeleteProductById();

  const handleClick = () => {
    deleteProduct(itemId)
      .then(res => {
        setIsOpen(false);
        router.push("/");
      })
      .catch(error => console.log(error));
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