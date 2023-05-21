import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetProducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = () => {
    axios.get(`${process.env.API_URL}/api/v1/products`)
      .then(res => {
        setProducts(res.data.response);
      })
      .catch(error => console.log(error))
  }

  return { products };
}

export default useGetProducts
