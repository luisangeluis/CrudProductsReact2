//Dependencies
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
//Slices
import { getProducts } from '@/store/slices/products.slice'
//Styles
import styles from "../styles/index.module.scss";
import MainLayout from '@/components/layout/mainLayout/mainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());

  }, [])

  return (
    <MainLayout>
      <section className={`${styles.container} ${inter.className}`}>
        <h1 className={styles.title}>main</h1>
      </section>
    </MainLayout>
  )
}
