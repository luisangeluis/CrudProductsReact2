import { useEffect, useState } from "react";
import styles from "./inputImageWithLabel.module.scss";
//Components
import InputImage from '@/components/atoms/inputImage/InputImage'
import Image from "next/image";

const InputImageWithLabel = ({ id, name, register, label, files, setFiles }) => {
  const [miniFiles, setMiniFiles] = useState();

  useEffect(() => {
    if(files)
    setMiniImages(files);
  }, [files])


  const handleChange = (e) => {
    const newFile = e.target.files[0];

    if (newFile) {
      addFiles(newFile);
      // setMiniImages();
    }
  }


  const addFiles = (file) => {
    const currentFiles = [...files];

    currentFiles.push(file);
    console.log(currentFiles);
    setFiles(currentFiles);
  }


  const setMiniImages = (files) => {
    const miniImages = [];
    // const currentMiniFiles = [...miniFiles]
    files.map(file => {
      if (file.type.match("image.*")) {
        const reader = new FileReader();

        reader.onload = e => {
          const thumbnailUrl = e.target.result;

          // currentMiniFiles.push(thumbnailUrl);
          // setMiniFiles(currentMiniFiles);
          miniImages.push(thumbnailUrl);
        }

        reader.readAsDataURL(file);
      }

    })

    console.log(typeof miniImages);
    setMiniFiles(miniImages);
  }

  return (
    <div className={styles.InputImageWithLabelContainer}>
      <InputImage id={id} name={name} register={register} onChange={handleChange} />
      <div className={styles.labelContainer}>
        <label htmlFor={id}>{label}</label>
      </div>
      <div className={styles.files}>
        {miniFiles?.map((file, i) => (
          <div className={styles.imageContainer} key={i}>
            <Image src={file} width={200} height={200} alt={"image"} />
          </div>
        ))}
      </div>
    </div >
  )
}

export default InputImageWithLabel