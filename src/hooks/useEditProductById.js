import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react'

const useEditProductById = () => {
  const [response, setResponse] = useState({
    res: "",
    error: ""
  });
  const router = useRouter();

  const editProductById = async (id, data) => {
    try {
      const res = await axios.put(`${process.env.API_URL}/api/v1/products/${id}`, data);
      return res
    } catch (error) {
      return error;
    }
  }

  return { editProductById };
}

export default useEditProductById
