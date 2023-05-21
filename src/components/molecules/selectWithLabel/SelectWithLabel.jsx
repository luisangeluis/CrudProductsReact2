import styles from "./SelectWithLabel.module.scss";
//Components
import Select from '@/components/atoms/select/Select'

const SelectWithLabel = ({id, name, options, label,register}) => {
  return (
    <div className={styles.selectWithLabelContainer}>
      <div>
        <label htmlFor={id} className={styles.label}>{label}</label>
      </div>
      <Select id={id} name={name} options={options} register={register}/>
    </div>
  )
}

export default SelectWithLabel;