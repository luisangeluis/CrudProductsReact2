import styles from "./InputCheckbox.module.scss";

const InputCheckbox = ({ id, name, onChange, register}) => {

  


  return (
    <input type="checkbox" id={id} name={name} onChange={onChange} {...register} className={styles.checkbox}/>
    )
}

export default InputCheckbox