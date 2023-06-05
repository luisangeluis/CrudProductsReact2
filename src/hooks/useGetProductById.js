import { setLoader } from '@/store/slices/loader.slice';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const useGetProductById = (id) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    response:{},
    isLoading:false,
    isError:false,
    message:""
  });

  useEffect(() => {
    if (id)
      getProductById();
  }, [id])

  const getProductById = () => {
    // dispatch(setLoader({ isLoading: true, isError: false, message: `` }))
    setProduct({response:{},isLoading:true,isError:false,message:""})
    axios.get(`${process.env.API_URL}/api/v1/products/${id}`)
      .then(res => {
        // console.log(res.data);
        // setProduct(res.data);
        // dispatch(setLoader({ isLoading: false, isError: false, message: `ok` }))
        setProduct({response:res.data,isLoading:false,isError:false,message:"ok"})

      })
      .catch(error => {
        console.log(error)
        // dispatch(setLoader({ isLoading: false, isError: true, message: `${error.message}` }))
        setProduct({response:{},isLoading:false,isError:true,message:`${error.message}`})

      });
  }
  return { product, getProductById }
}

export default useGetProductById
