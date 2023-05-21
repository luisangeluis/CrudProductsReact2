import axios from "axios";
import { useState } from "react";

const useDeleteProductById = () => {
  const [response, setResponse] = useState();

  const deleteProduct = async (id) => {
    const result = await axios.delete(`${process.env.API_URL}/api/v1/products/${id}`);
    return result;
  }

  return { deleteProduct }

}

export default useDeleteProductById
