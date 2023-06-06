import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
//Hooks
import useGetProductCategories from "@/hooks/useGetProductCategories";
//Styles
import styles from "./FormProduct.module.scss";
//Components
import InputWithLabel from '../inputWithLabel/InputWithLabel'
import SelectWithLabel from '../selectWithLabel/SelectWithLabel'
import TextAreaWithLabel from '../textAreaWithLabel/TextAreaWithLabel'
import firstMayusc from "@/utils/firstMayusc";
import InputImageWithLabel from "../inputImageWithLabel/InputImageWithLabel";
import Image from "next/image";

const FormProduct = ({ product, submit }) => {
  console.log(product);
  const [files, setFiles] = useState([]);
  const { categories } = useGetProductCategories();

  const { register, handleSubmit, watch, formState: { errors }, control, setValue, getValues } = useForm({
    defaultValues: {
      name: firstMayusc(product?.name) || "",
      description: firstMayusc(product?.description) || "",
      brand: firstMayusc(product?.brand) || "",
      price: firstMayusc(product?.price) || "",
    }
  });


  useEffect(() => {
      if (product){
        setValue("productCategoryId", product?.productCategoryId);
      }
  }, [categories,product])

  useEffect(() => {
    if (product) {
      setValue("name", product?.name)
      setValue("description", product?.description)
      setValue("brand", product?.brand)
      setValue("price", product?.price)
    }
  }, [product])

  const onSubmit = data => {
    const formData = new FormData();

    data.image = files;

    for (let clave in data) {
      if (clave != "image") {
        formData.append(clave, data[clave]);
      } else {
        for (let i = 0; i < data[clave].length; i++) {
          formData.append("image", data[clave][i]);
        }
      }
    }

    submit(formData);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data"
      id="formProduct">
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
        <InputImageWithLabel id="image" name="image" label="UPLOAD IMAGES" register={{ ...register("image") }}
          files={files} setFiles={setFiles} watch={watch} />

        {
          product && (
            <>
            <h2 className={styles.subtitle}>Curren Images</h2>
            <div className={styles.productImages}>
              {
                product.product_images?.map((image,i) => {
                  console.log(image);
                  return <Image src={image.imageUrl} width={150} height={150} alt={"image"} key={i}/>
                })
              }
            </div>
            </>
          )
        }
      </div>
      <div>
        <br />
        <button type="submit" className={styles.submit} form="formProduct">
          {product ? "Send" : "Create"}<RiSendPlane2Fill />
        </button>
      </div>
    </form>
  )
}

export default FormProduct