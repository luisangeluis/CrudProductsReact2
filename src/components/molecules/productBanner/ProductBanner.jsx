import { useEffect, useState } from 'react'
//Utils
import firstMayusc from '@/utils/firstMayusc';
//Styles
import styles from "./ProductBanner.module.scss";
//Components
import Image from 'next/image';
import ImagesSection from '@/components/atoms/imagesSection/ImagesSection';

const ProductBanner = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (product.response.product_images?.length > 0) {
      setCurrentImage(
        { product: product.response.product_images[0], position: 0 }
      );
    }
  }, [product])

  const handleClick = (e, i) => {
    setCurrentImage({ product: product.response.product_images[i], position: i })
  }

  return (
    <section className={styles.banner}>
      <article className={styles.bannerImages}>
        <ImagesSection imagesList={product?.response.product_images} onClick={handleClick} selectedIndex={currentImage?.position} />
      </article>
      <div className={styles.imageContainer}>
        <Image className={styles.bannerImage}
          src={currentImage ? currentImage.product.imageUrl : "/img/temporalImage.jpg"}
          width={500} height={1000} alt={"banner-image"} />
      </div>
      <article className={styles.bannerInfo}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.response.name?.toUpperCase()}</h1>
          <p className={styles.text}>{firstMayusc(product?.response.description)}</p>
          <h2 className={styles.subtitle}>${product?.response.price}</h2>
        </div>
      </article>
    </section>
  )
}

export default ProductBanner;
