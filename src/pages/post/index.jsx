import MainLayout from "@/components/layout/mainLayout/MainLayout";
import styles from "../../styles/create.module.scss";
import FormProduct from "@/components/molecules/formProduct/FormProduct";

const Post = () => {
  return (
    <section className={styles.createContainer}>
      <MainLayout>
        <div className="container">
          <h1 className={styles.title}>Create</h1>
          <FormProduct />
        </div>
      </MainLayout>
    </section>
  )
}

export default Post;
