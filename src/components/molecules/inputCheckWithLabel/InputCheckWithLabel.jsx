import styles from "./InputCheckWithLabel.module.scss";
//Components
import InputCheckbox from '@/components/atoms/inputCheckbox/InputCheckbox'

const InputCheckWithLabel = ({ id, name, onChange, label, register }) => {
  return (
    <div className={styles.inputCheckContainer}>
      <InputCheckbox id={id} name={name} onChange={onChange} register={register}
        
      />
      <div className={styles.labelContainer}>
        <label htmlFor={id} className={styles.label}>{label}</label>
      </div>
    </div>
  )
}

export default InputCheckWithLabel