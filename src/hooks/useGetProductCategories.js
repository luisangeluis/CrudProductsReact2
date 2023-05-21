import axios from "axios";
import { useEffect, useState } from "react";

const useGetProductCategories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    getCategories();
  }, [])

  const getCategories = () => {
    axios.get(`${process.env.API_URL}/api/v1/productCategories`)
      .then(res => setCategories(res.data.response))
      .catch(error => console.log(error));
  }

  return { categories };
}

export default useGetProductCategories;
