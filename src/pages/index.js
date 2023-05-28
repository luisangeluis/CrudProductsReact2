'use client';

//Dependencies
import { Inter } from 'next/font/google'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
//Slices
import { getProducts } from '@/store/slices/products.slice';
//Styles
import styles from "../styles/index.module.scss";
//Components
import MainLayout from '@/components/layout/mainLayout/mainLayout'
import ProductCard from "@/components/molecules/ProductCard/ProductCard";
import InputCheckWithLabel from '@/components/molecules/inputCheckWithLabel/InputCheckWithLabel';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    console.log("naciendo");
    dispatch(getProducts());
  }, [])

  const handleChecked = (isDark) => isDark ? setIsDark(true) : setIsDark(false);

  return (
    <MainLayout>
      <section className={styles.titleSwitch} >
        <h1 className={styles.title}>PRODUCTS</h1>
        <InputCheckWithLabel id={"switch"} onChange={handleChecked} />
      </section>
      <section className={styles.productSection}>
        {
          products.products?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        }
      </section>

    </MainLayout>
  )
}
