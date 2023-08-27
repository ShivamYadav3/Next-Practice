import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { ItemContext } from "../../context/context";

const Products = () => {
  const { product, setProduct } = useContext(ItemContext);
  console.log(product, "re", setProduct);

  useEffect(() => {
    if (product && product.length !== 0) {
      return;
    }
    fetch(`https://fakestoreapi.com/products`)
      .then((data) => data.json())
      .then((data) => {
        setProduct(data);
        console.log(product);
      });
  }, []);

  return (
    <>
      <h1>Product List</h1>
      <div>
        {product.map((data) => {
          return (
            <div key={data.id}>
              <Link href={`/shivam/product/${data.id}`}>{data.title}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Products;
