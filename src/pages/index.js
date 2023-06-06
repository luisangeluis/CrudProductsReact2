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
import { getProducts } from '@/store/slices/products.slice';
import PopUp from '@/components/atoms/popUp/PopUp';
import { setProducts } from '@/store/slices/products.slice';
import ProductFilter from '@/components/molecules/productFilter/ProductFilter';

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    console.log("naciendo");
    dispatch(getProducts());
  }, [])

  useEffect(() => {
    if (products.message?.length) {
      setTimeout(() => {
        dispatch((setProducts({ ...products, message: "" })));
      }, 3000);
    }
  }, [products.message])


  return (
    <MainLayout>
      {products.isLoading && <Loader />}
      {products.message?.length > 0 && <PopUp message={products.message} />}
      <section className={styles.titleSwitch} >
        <h1 className={styles.title}>PRODUCTS</h1>
        <SwitchTheme />
      </section>
      {<ProductFilter products={products.products} />}
    </MainLayout>
  )
}
