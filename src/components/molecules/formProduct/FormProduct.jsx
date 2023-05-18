import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
//Slices
import { createProduct, editProduct } from "@/store/slices/products.slice";
//Styles
import styles from "./FormProduct.module.scss";
//Components
import InputWithLabel from '../inputWithLabel/InputWithLabel'
import SelectWithLabel from '../selectWithLabel/SelectWithLabel'
import TextAreaWithLabel from '../textAreaWithLabel/TextAreaWithLabel'
import InputCheckWithLabel from "../inputCheckWithLabel/InputCheckWithLabel";
import firstMayusc from "@/utils/firstMayusc";

// const options = [
//   { value: "a", title: "a" },
//   { value: "b", title: "b" }
// ];

const FormProduct = ({ product, setIsOpen }) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState();
  const { register, handleSubmit, watch, formState: { errors }, control, setValue } = useForm({
    defaultValues: {
      name: firstMayusc(product?.name) || "",
      description: firstMayusc(product?.description) || "",
      brand: firstMayusc(product?.brand) || "",
      price: firstMayusc(product?.price) || "",
      // active: product?.status == "active" ? true : false
    }
  });

  useEffect(() => {
    getProductCategories()
  }, [])

  useEffect(() => {
    if (product)
      setValue("productCategoryId", product.productCategoryId);

  }, [categories])


  const getProductCategories = () => {
    const api = process.env.API_URL;

    axios.get(`${api}/api/v1/productCategories`)
      .then(res => {
        const options = [];
        const data = res.data.response;

        data.map(category => {
          const option = { value: category.id, title: category.name }
          options.push(option);
        })

        setCategories(options)
      })
      .catch(error => console.log(error));
  }

  const onSubmit = data => {
    console.log(data);
    setIsOpen(false);
    product?.id
      ? dispatch(editProduct(product.id, data))
      : dispatch(createProduct(data));
  }


  // const 
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Create a product</h2>

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

      {/* <InputCheckWithLabel id="active" name="active" label="Is Active?"
        register={{ ...register("active") }} />
      {errors.active && <p className={styles.error}>This field is required</p>} */}

      <button type="submit" className={styles.submit}>Send</button>
    </form>
  )
}

export default FormProduct