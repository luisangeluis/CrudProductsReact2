import { useRouter } from "next/router";
import { useSelector } from "react-redux";
//Hooks
import useGetProductById from "@/hooks/useGetProductById";
import useEditProductById from "@/hooks/useEditProductById";
//Styles
import styles from "../../styles/update.module.scss";
//Components
import MainLayout from '@/components/layout/mainLayout/MainLayout';
import FormProduct from '@/components/molecules/formProduct/FormProduct';
import PopUp from "@/components/atoms/popUp/PopUp";
import Loader from "@/components/organisms/loader/Loader";

const Edit = () => {
  const router = useRouter();
  const { id } = router.query;
  const { product, getProductById } = useGetProductById(id);
  const { response, editProductById } = useEditProductById(id);
  const loader = useSelector(state => state.loader);

  console.log(product);

  return (
    <section>
      {product.isLoading && <Loader />}
      {loader.isLoading && <Loader />}
      {product.message.length > 0 && <PopUp message={loader.message} />}
      {loader.message.length > 0 && <PopUp message={loader.message} />}
      <MainLayout>
        <h1 className={styles.title}>Edit product</h1>
        <FormProduct product={product.response} submit={editProductById} />
      </MainLayout>
    </section>
  )
}

export default Edit;
