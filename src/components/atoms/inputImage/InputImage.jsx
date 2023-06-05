import styles from "./InputImage.module.scss";

const InputImage = ({ id, name, register, onChange }) => {
  return (
    <input className={styles.inputImage} id={id} name={name} type='file'
      {...register}
      multiple onChange={onChange}
    />
  )
}

export default InputImage