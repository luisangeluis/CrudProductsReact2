import { setLoader } from '@/store/slices/loader.slice';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const useGetProductById = (id) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    response: {},
    isLoading: false,
    isError: false,
    message: ""
  });

  useEffect(() => {
    if (id)
      getProductById();
  }, [id])

  const getProductById = () => {
    setProduct({ response: {}, isLoading: true, isError: false, message: "" });

    axios.get(`${process.env.API_URL}/api/v1/products/${id}`)
      .then(res => setProduct({ response: res.data, isLoading: false, isError: false, message: "" }))
      .catch(error => {
        console.log(error)
        setProduct({ response: {}, isLoading: false, isError: true, message: `${error.message}` })
      });
  }
  return { product, getProductById }
}

export default useGetProductById
