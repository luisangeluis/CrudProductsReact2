import axios from 'axios';
import { setLoader } from '@/store/slices/loader.slice';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const useEditProductById = (id) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [response, setResponse] = useState({
    product: {},
    isError: false,
    message: ""
  });

  useEffect(() => {
    dispatch(setLoader({ isLoading: false, isError: false, message: `` }))

  }, [])


  const editProductById = (data) => {
    dispatch(setLoader({ isLoading: true, isError: false, message: `` }));

    axios.put(`${process.env.API_URL}/api/v1/products/${id}`, data)
      .then(res => {
        dispatch(setLoader({ isLoading: false, isError: false, message: `Prduct edited successfully` }))

        setTimeout(() => {
          router.push("/")
        }, 3500);
      })
      .catch(error => dispatch(setLoader({ isLoading: false, isError: true, message: `${error.message}` })))
  }

  return { response, editProductById };
}

export default useEditProductById
