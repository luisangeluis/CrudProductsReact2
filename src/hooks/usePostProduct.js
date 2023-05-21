import axios from 'axios';
import { useState } from 'react'

const usePostProduct = () => {
  const [response, setResponse] = useState();

  const postProduct = async (url, data) => {
    try {
      const res = await axios.post(`${url}`, data);
      return res;
    } catch (error) {
      return error;
    }
  }

  return { response, postProduct };
}

export default usePostProduct;
