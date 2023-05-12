import styles from "./InputWithLabel.module.scss";
//Components
import Input from '@/components/atoms/input/Input'

const InputWithLabel = ({ id, name, type, onChange, label, register }) => {
  return (
    <div className={styles.inputWithLabelContainer}>
      <div className={styles.labelContainer}>
        <label htmlFor={id} className={styles.label}>{label}</label>
      </div>
      <Input id={id} name={name} type={type} onChange={onChange} register={register} />
    </div>
  )
}

export default InputWithLabel