import styles from "./InputImage.module.scss";

const InputImage = ({ id, name, register, onChange }) => {
  return (
    <input className={styles.inputImage} id={id} name={name} type='file'
      {...register}
      // ref={register}
      multiple onChange={onChange}
    />
  )
}

export default InputImage