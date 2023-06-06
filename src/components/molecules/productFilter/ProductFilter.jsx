import { useEffect, useState } from "react";
//Styles
import styles from "./ProductFilter.module.scss";
//Components
import Input from "@/components/atoms/input/Input";
import ProductCard from "../ProductCard/ProductCard";

const ProductFilter = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState();

  useEffect(() => {
    setFilteredProducts(products);
  }, [products])

  const handleChange = (e) => {
    const value = e.target.value.trim();
    const pattern = new RegExp(value);
    const result = products.filter(product => pattern.test(product.name) || pattern.test(product.description));
    setFilteredProducts(result)
  }

  return (
    <div className={styles.productFilterContainer}>
      <div className={styles.searchSection}>
        <Input id={"search"} name={"search"} type="text" onChange={handleChange} />
      </div>
      <div className={styles.productSection}>
        {filteredProducts?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default ProductFilter
