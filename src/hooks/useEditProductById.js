import axios from 'axios';
import { useRouter } from 'next/router';
import  { useState } from 'react'

const useEditProductById = () => {
  const [response, setResponse] = useState();
  const router = useRouter();

  const editProductById = async (id,data) => {
    const result = await axios.put(`${process.env.API_URL}/api/v1/products/${id}`,data);
    return result;
  }

  return { editProductById };
}

export default useEditProductById
