import styles from "./TextArea.module.scss";

const TextArea = ({ id, name, onChange, register }) => {
  return (<textarea id={id} name={name} onChange={onChange} className={styles.textArea} {...register}>
  </textarea>)

}

export default TextArea;