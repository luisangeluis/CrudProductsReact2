import { useEffect, useState } from 'react'
//Utils
import firstMayusc from '@/utils/firstMayusc';
//Styles
import styles from "./ProductBanner.module.scss";
//Components
import Image from 'next/image';
import ImagesSection from '@/components/atoms/imagesSection/ImagesSection';

const ProductBanner = ({ product }) => {
  console.log(product);
  const [currentImage, setCurrentImage] = useState(null);
  console.log(currentImage);
  useEffect(() => {
    if (product?.product_images.length > 0) {
      setCurrentImage(
        { product: product.product_images[0], position: 0 }
      );
    }
  }, [product])

  const handleClick = (e, i) => {
    console.log(e, i);
    setCurrentImage({ product: product.product_images[i], position: i })
  }

  return (
    <section className={styles.banner}>
      <article className={styles.bannerImages}>
        <ImagesSection imagesList={product?.product_images} onClick={handleClick} selectedIndex={currentImage?.position} />
      </article>
      {/* <article className={styles.bannerMainImage}> */}
        <div className={styles.imageContainer}>
          <Image className={styles.bannerImage} 
            src={currentImage ? currentImage.product.imageUrl : "/img/temporalImage.jpg"}
            width={500} height={1000} alt={"banner-image"} />
        </div>
      {/* </article> */}
      <article className={styles.bannerInfo}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product?.name.toUpperCase()}</h1>
          <p className={styles.text}>{firstMayusc(product?.description)}</p>
          <h2 className={styles.subtitle}>${product?.price}</h2>
        </div>

      </article>
    </section>
  )
}

export default ProductBanner
