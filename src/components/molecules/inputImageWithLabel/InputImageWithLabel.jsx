import { useState } from "react";
import styles from "./inputImageWithLabel.module.scss";
//Components
import InputImage from '@/components/atoms/inputImage/InputImage'

const InputImageWithLabel = ({ id, name, register, label }) => {
  console.log(register);
  const [files, setFiles] = useState([]);
  console.log(files);
  const handleChange = (e) => {
    const currentFiles = [...files];
    const newFile = e.target.files[0];
    console.log(newFile);
    currentFiles.push(newFile);
    setFiles(currentFiles);
    // console.log(files);
  }
  return (
    <div className={styles.InputImageWithLabelContainer}>
      <InputImage id={id} name={name} onChange={handleChange} register={{...register({onChange:handleChange})}} />
      <div className={styles.labelContainer}>
        <label htmlFor={id}>{label}</label> 
      </div>
      <div className={styles.files}>
        {
          files.map((file,i) => (<p key={i}>{file.name}- </p>))
        }
      </div>
    </div>
  )
}

export default InputImageWithLabel