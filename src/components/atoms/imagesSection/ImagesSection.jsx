import Image from "next/image";
import styles from "./ImagesSection.module.scss";
import { useRef } from "react";

const ImagesSection = ({ imagesList, onClick,selectedIndex }) => {
  // console.log(imagesList);
  const ref = useRef();

  const handleClick=(e)=>{
    
  }

  console.log(imagesList);
  return (
    <div className={styles.imagesSectionContainer}>
      {
        imagesList?.length ?
          (imagesList.map((image, i) => (
            <Image className={`${styles.image} ${i==selectedIndex && styles.selected}`} 
            src={image.imageUrl} width={1000} height={1000} alt={"image"}
              onClick={(e) => onClick(e, i)} key={i} />
          )))
          : ""
      }
    </div>
  )
}

export default ImagesSection;