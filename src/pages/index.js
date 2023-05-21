'use client';

//Dependencies
import { Inter } from 'next/font/google'
//Styles
import styles from "../styles/index.module.scss";
//Components
import MainLayout from '@/components/layout/mainLayout/mainLayout'
import ProductCard from "@/components/molecules/ProductCard/ProductCard";
import useGetProducts from '@/hooks/useGetProducts';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { products } = useGetProducts();
  
  return (
    <MainLayout>
      <section className={`container ${inter.className}`}>
        <h1 className={styles.title}>PRODUCTS</h1>
        <section className={styles.productSection}>
          {
            products?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          }
        </section>
      </section>
    </MainLayout>
  )
}
