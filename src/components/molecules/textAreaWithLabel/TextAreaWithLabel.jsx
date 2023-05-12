import styles from "./TextAreaWithLabel.module.scss";
//Components
import TextArea from '@/components/atoms/textarea/TextArea'

const TextAreaWithLabel = ({ id, name, onChange, label,register }) => {
  return (
    <div className={styles.textAreaWithLabelContainer}>
      <div className={styles.labelContainer}>
        <label htmlFor={id} className={styles.label}>{label}</label>
      </div>
      <TextArea id={id} name={name} onChange={onChange} register={register}/>
    </div>
  )
}

export default TextAreaWithLabel;