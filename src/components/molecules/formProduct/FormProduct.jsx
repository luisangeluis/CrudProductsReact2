import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/router";
//Hooks
import usePostProduct from "@/hooks/usePostProduct";
import useEditProductById from "@/hooks/useEditProductById";
import useGetProductCategories from "@/hooks/useGetProductCategories";
//Styles
import styles from "./FormProduct.module.scss";
//Components
import InputWithLabel from '../inputWithLabel/InputWithLabel'
import SelectWithLabel from '../selectWithLabel/SelectWithLabel'
import TextAreaWithLabel from '../textAreaWithLabel/TextAreaWithLabel'
import firstMayusc from "@/utils/firstMayusc";
import InputImageWithLabel from "../inputImageWithLabel/InputImageWithLabel";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, editProduct } from "@/store/slices/products.slice";

const FormProduct = ({ product, setIsOpen }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  // const { response, postProduct } = usePostProduct();

  const { categories } = useGetProductCategories();
  const { editProductById } = useEditProductById();
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors }, control, setValue } = useForm({
    defaultValues: {
      name: firstMayusc(product?.name) || "",
      description: firstMayusc(product?.description) || "",
      brand: firstMayusc(product?.brand) || "",
      price: firstMayusc(product?.price) || "",
    }
  });

  useEffect(() => {
    if (product)
      setValue("productCategoryId", product?.productCategoryId);
  }, [categories])

  useEffect(() => {
    if (product) {
      setValue("name", product?.name)
      setValue("description", product?.description)
      setValue("brand", product?.brand)
      setValue("price", product?.price)
    }
  }, [product])

  const onSubmit = data => {
    if (product?.id) {
      dispatch(editProduct(product.id, data));

    } else {
      dispatch(createProduct(data));
    }
    
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputWithLabel id="name" name="name" type="text" label="Product name"
          register={{ ...register("name", { required: true }) }} />
        {errors?.name && <p className={styles.error}>This field is required</p>}

        <TextAreaWithLabel id="description" name="description" label="Description"
          register={{ ...register("description", { required: true }) }} />
        {errors.description && <p className={styles.error}>This field is required</p>}

        <InputWithLabel id="brand" name="brand" type="text" label="Brand"
          register={{ ...register("brand", { required: true }) }} />
        {errors.brand && <p className={styles.error}>This field is required</p>}

        <InputWithLabel id="price" name="price" type="number" label="Price"
          register={{ ...register("price", { required: true }) }} />
        {errors.price && <p className={styles.error}>This field is required</p>}

        <SelectWithLabel id="productCategoryId" name="productCategoryId" options={categories} label="Category"
          register={{ ...register("productCategoryId", { required: true }) }} />
        {errors.productCategoryId && <p className={styles.error}>This field is required</p>}
      </div>
      <div>
        <InputImageWithLabel id="image" name="image" label="Upload images" />
      </div>
      <div>
        <br />
        <button type="submit" className={styles.submit}>Send</button>
      </div>
    </form>
  )
}

export default FormProduct