import styles from "./InputImage.module.scss";

const InputImage = ({ id, name, register, onChange,placeholder }) => {
  return (
    <input className={styles.inputImage} id={id} name={name} type='file'
      {...register} multiple onChange={onChange} placeholder={placeholder}/>
  )
}

export default InputImage