import { useRouter } from "next/router";
//Styles
import styles from "../../styles/update.module.scss";
//Components
import MainLayout from '@/components/layout/mainLayout/MainLayout';
import FormProduct from '@/components/molecules/formProduct/FormProduct';
import useGetProductById from "@/hooks/useGetProductById";
import { useEffect } from "react";

const Edit = () => {
  const router = useRouter();
  const { id } = router.query;
  const { product, getProductById } = useGetProductById(id);

  return (
    <section>
      <MainLayout>
        <div className="container">

        <h1 className={styles.title}>Edit</h1>
        <FormProduct product={product} />
        </div>
      </MainLayout>
    </section>
  )
}

export default Edit;
