import styles from "./Select.module.scss";

const Select = ({ id, name, options,register }) => {
  return (
    <select id={id} name={name} {...register} className={styles.select}>
      <option value="">Select an option</option>
      {options?.map((option,i) => <option value={option.value} key={i}>{option.title}</option>)}
    </select>
  )
}

export default Select;