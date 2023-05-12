import { useForm } from "react-hook-form";
//Styles
import styles from "./FormProduct.module.scss";
//Components
import InputWithLabel from '../inputWithLabel/InputWithLabel'
import SelectWithLabel from '../selectWithLabel/SelectWithLabel'
import TextAreaWithLabel from '../textAreaWithLabel/TextAreaWithLabel'
import InputCheckWithLabel from "../inputCheckWithLabel/InputCheckWithLabel";

const options = [
  { value: "a", title: "a" },
  { value: "b", title: "b" }
];

const FormProduct = () => {
  const { register, handleSubmit, watch, formState: { errors }, control } = useForm();

  const onSubmit = data => {
    console.log(data);
  }

  

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Create a product</h2>

      <InputWithLabel type="text" label="Product name"
        register={{ ...register("name", { required: true }) }} />
      {errors?.name && <p>This field is required</p>}

      <TextAreaWithLabel id="description" name="description" label="Description"
        register={{ ...register("description", { required: true }) }} />
      {errors.description && <span>This field is required</span>}

      <InputWithLabel id="brand" name="brand" type="text" label="Brand"
        register={{ ...register("brand", { required: true }) }} />
      {errors.brand && <span>This field is required</span>}

      <InputWithLabel id="price" name="price" type="number" label="Price"
        register={{ ...register("price", { required: true }) }} />
      {errors.price && <span>This field is required</span>}


      <SelectWithLabel id="category" name="category" options={options} label="Category"
        register={{ ...register("category", { required: true }) }} />
      {errors.category && <p>This field is required</p>}

      <InputCheckWithLabel id="active" name="active" label="Is Active?"
        register={{ ...register("active") }} />
      {errors.active && <span>This field is required</span>}

      <button type="submit" className={styles.submit}>Send</button>
    </form>
  )
}

export default FormProduct