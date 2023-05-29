'use client';

//Dependencies
import { Inter } from 'next/font/google'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
//Slices
import { getProducts } from '@/store/slices/products.slice';
import { setLoader } from '@/store/slices/loader.slice';
//Styles
import styles from "../styles/index.module.scss";
//Components
import MainLayout from '@/components/layout/mainLayout/mainLayout'
import ProductCard from "@/components/molecules/ProductCard/ProductCard";
import SwitchTheme from '@/components/atoms/switchTheme/SwitchTheme';
import ModalContainer from '@/components/organisms/modalContainer/ModalContainer';
import Loader from '@/components/organisms/loader/Loader';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const loader = useSelector(state => state.loader);

  useEffect(() => {
    console.log("naciendo");
    dispatch(getProducts());
  }, [])

  useEffect(() => {
    dispatch(setLoader(true))
    if (products.products.length || products.error) dispatch(setLoader(false))
  }, [products])


  return (
    <MainLayout>
      {loader && <Loader />}
      <section className={styles.titleSwitch} >
        <h1 className={styles.title}>PRODUCTS</h1>
        <SwitchTheme />
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
