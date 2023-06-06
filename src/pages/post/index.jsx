import { useSelector } from "react-redux";
//Hooks
import usePostProduct from "@/hooks/usePostProduct";
//Styles
import styles from "../../styles/create.module.scss";
//Components
import MainLayout from "@/components/layout/mainLayout/MainLayout";
import FormProduct from "@/components/molecules/formProduct/FormProduct";
import Loader from "@/components/organisms/loader/Loader";
import PopUp from "@/components/atoms/popUp/PopUp";

const Post = () => {
  const { response, postProduct } = usePostProduct();
  const loader = useSelector(state => state.loader);

  return (
    <section className={styles.createContainer}>
      {loader.isLoading && <Loader />}
      {loader.message.length > 0 && <PopUp message={loader.message}/>}
      {/* <PopUp /> */}
      <MainLayout>
        <h1 className={styles.title}>Add a product</h1>
        <FormProduct submit={postProduct} />
      </MainLayout>

    </section>
  )
}

export default Post;
