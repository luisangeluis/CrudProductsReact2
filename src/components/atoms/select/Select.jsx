import styles from "./Select.module.scss";

const Select = ({ id, name, options, register }) => {
  const setOptions = () => {
    const list = options?.map(op => {
      return <option value={op.id} key={op.id}>{op.name}</option>
    })
    return list;
  }

  return (
    <select id={id} name={name} {...register} className={styles.select}>
      <option value="">Select an option</option>
      {setOptions()}
    </select>
  )
}

export default Select;