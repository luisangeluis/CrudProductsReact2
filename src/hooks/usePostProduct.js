import { setLoader } from '@/store/slices/loader.slice';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const usePostProduct = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [response, setResponse] = useState({
    product: [],
    isError: false,
    message: ""
  })

  useEffect(() => {
    dispatch(setLoader({ isLoading: false, isError: false, message: `` }))
    
  }, [])
  

  const postProduct = (data) => {
    dispatch(setLoader({ isLoading: true, isError: false, message: `` }));
    
    axios.post(`${process.env.API_URL}/api/v1/products`, data)
      .then(res => {
        // console.log(res);
        dispatch(setLoader({ isLoading: false, isError: false, message: `Prduct created successfully` }))

        setTimeout(() => {
          router.push("/")
        }, 3500);
      }).catch(error => {
        // console.log(error)
        dispatch(setLoader({ isLoading: false, isError: true, message: `${error.message}` }))

      })
  }

  return { response, postProduct };
}

export default usePostProduct;
