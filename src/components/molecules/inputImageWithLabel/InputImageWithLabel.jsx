import { useEffect, useState } from "react";
import styles from "./inputImageWithLabel.module.scss";
//Components
import InputImage from '@/components/atoms/inputImage/InputImage'
import Image from "next/image";

const InputImageWithLabel = ({ id, name, register, label, files, setFiles, placeholder }) => {
  const [images, setImages] = useState([]);

  console.log(files);
  console.log(images);

  useEffect(() => {
    if (files.length > 0) {
      getMiniImages(files);
    }
  }, [files])

  const handleChange = (e) => {
    const currentImages = [...files];
    const newFile = e.target.files[0];

    currentImages.push(newFile);

    setFiles(currentImages);
  }

  const getMiniImages = (files) => {
    const prevImages = [...images];

    files.map((file, i) => {
      if (file.type.match("image.*")) {
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = e => {
          const thumbnailUrl = e.target.result;

          setImages([...prevImages, thumbnailUrl])
        }
      }
    })
  }

  return (
    <>

      <div className={styles.InputImageWithLabelContainer}>
        <InputImage id={id} name={name} register={register} onChange={handleChange} placeholder={placeholder} />
        <div className={styles.labelContainer}>
          <label htmlFor={id}>
            {label}
          </label>

        </div>
        <div className={styles.files}>
          {
            images?.map((file, i) => (
              <div className={styles.imageContainer} key={i}>
                <Image src={file} width={200} height={200} alt={"image"} />
              </div>
            ))
          }
        </div>
      </div >
      <h3 className={styles.subtitle}>{placeholder}</h3>
    </>
  )
}

export default InputImageWithLabel