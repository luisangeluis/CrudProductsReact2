import axios from 'axios';
import { useEffect, useState } from 'react'

const useGetProductById = (id) => {
  const [product, setProduct] = useState();

  useEffect(() => {
    if (id) {
      getProductById(id);
    }
  }, [id])

  const getProductById = (id) => {
    axios.get(`${process.env.API_URL}/api/v1/products/${id}`)
      .then(res => {
        setProduct(res.data);
      })
      .catch(error => console.log(error));
  }
  return { product, getProductById }
}

export default useGetProductById
