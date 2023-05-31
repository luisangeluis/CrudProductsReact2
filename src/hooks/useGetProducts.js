import { setLoader } from '@/store/slices/loader.slice';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const useGetProducts = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState({
    products: null,
    isError: false,
    message: ""
  });

  useEffect(() => {
    getProducts();
  }, [])
  

  const getProducts = async () => {
    dispatch(setLoader(true));
    try {
      const res = await axios.get(`${process.env.API_URL}/api/v1/products`);

      setProducts({ products: res.data.response, isError: false, message: "ok" });
    } catch (error) {
      console.log(error);
      setProducts({ products: [], isError: true, message: `${error.message}` });

    }
    dispatch(setLoader(false));
  }

  return { products, getProducts };
}

export default useGetProducts
