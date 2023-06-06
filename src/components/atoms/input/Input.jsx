import styles from "./Input.module.scss";

const Input = ({ id, name, type, onChange, register,placeholder }) => {
  return (
    <input id={id} name={name} type={type} onChange={onChange} className={styles.input} {...register} 
    placeholder={placeholder}/>
  )
}

export default Input