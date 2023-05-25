import Image from "next/image";
import styles from "./ImagesSection.module.scss";

const ImagesSection = ({ imagesList }) => {
  // console.log(imagesList);
  console.log();
  return (
    <div>
      { 
      imagesList?.length ?
        (imagesList.map(image=>(
          <Image src={image.imageUrl} width={1000} height={1000} alt={"image"}/>
        )))
        :"No image"
      }
    </div>
  )
}

export default ImagesSection;