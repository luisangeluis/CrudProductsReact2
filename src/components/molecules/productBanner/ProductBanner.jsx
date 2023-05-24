import { useEffect, useState } from 'react'
//Styles
import styles from "./ProductBanner.module.scss";
import Image from 'next/image';
import { current } from '@reduxjs/toolkit';
import ImagesSection from '@/components/atoms/imagesSection/ImagesSection';
const ProductBanner = ({ product }) => {

  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (product?.product_images.length > 0) {
      setCurrentImage(product.product_images[0]);

    } else {
      // setCurrentImage()
    }
  }, [])

  return (
    <section className={styles.banner}>
      <article className={styles.bannerImages}>
        <ImagesSection imagesList={product?.product_images} />
      </article>
      <article className={styles.bannerMainImage}>
        <div className={styles.imageContainer}>
          <Image className={styles.bannerImage} src={currentImage ? currentImage?.imageUrl : "/img/temporalImage.jpg"}
            width={500} height={1000} alt={"banner-image"} />
        </div>
      </article>
      <article className={styles.bannerInfo}>
        <h1>{product?.name}</h1>
        <p>{product?.description}</p>
        <h2>${product?.price}</h2>
      </article>
    </section>
  )
}

export default ProductBanner
