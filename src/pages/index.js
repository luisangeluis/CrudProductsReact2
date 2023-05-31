'use client';

//Dependencies
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
//Styles
import styles from "../styles/index.module.scss";
//Components
import MainLayout from '@/components/layout/mainLayout/mainLayout'
import ProductCard from "@/components/molecules/ProductCard/ProductCard";
import SwitchTheme from '@/components/atoms/switchTheme/SwitchTheme';
import Loader from '@/components/organisms/loader/Loader';
import useGetProducts from '@/hooks/useGetProducts';
import { setLoader } from '@/store/slices/loader.slice';
import { getProducts } from '@/store/slices/products.slice';

export default function Home() {
  // const { products, getProducts } = useGetProducts();
  const dispatch = useDispatch();
  const loader = useSelector(state => state.loader);
  const products = useSelector(state => state.products);

  useEffect(() => {
    console.log("naciendo");
    dispatch(getProducts());
  }, [])

  useEffect(() => {
    dispatch(setLoader(true));
    if(products.products.length || products.error)dispatch(setLoader((false)));
    
  }, [products.products])
  

  return (
    <MainLayout>
      {loader && <Loader />}
      <section className={styles.titleSwitch} >
        <h1 className={styles.title}>PRODUCTS</h1>
        <SwitchTheme />
      </section>
      <section className={styles.productSection}>
        {products.products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
    </MainLayout>
  )
}
