import styles from "./Input.module.scss";

const Input = ({ id, name, type, onChange, register }) => {
  return (
    <input id={id} name={name} type={type} onChange={onChange} className={styles.input} {...register} />
  )
}

export default Input