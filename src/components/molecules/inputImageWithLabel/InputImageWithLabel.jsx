import styles from "./inputImageWithLabel.module.scss";
//Components
import InputImage from '@/components/atoms/inputImage/InputImage'

const InputImageWithLabel = ({ id, name, onChange, register, label }) => {
  return (
    <div className={styles.InputImageWithLabelContainer}>
      <div>
        <label htmlFor={id}>{label}</label>
      </div>
      <InputImage id={id} name={name} onChange={onChange} register={register} />
    </div>
  )
}

export default InputImageWithLabel