import styles from "./InputImage.module.scss";

const InputImage = ({ id, name, onChange, register }) => {
  return (
    <input className={styles.inputImage} id={id} name={name} type='file' onChange={onChange} {...register} multiple />
  )
}

export default InputImage