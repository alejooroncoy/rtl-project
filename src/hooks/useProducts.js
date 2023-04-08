import { useLayoutEffect } from "react";
import { useState } from "react";
import Product from "../assets/img/product.jpg";

export default function useProducts() {
  const [products, setProducts] = useState();
  const getProducts = async () => {
    const data = await Promise.resolve(
      Array(10).fill({
        producto_precio: 522.29,
        producto_nombre: "Samsung",
        producto_orden: 3,
        producto_imagen: Product,
      })
    );
    setProducts(data);
  };
  useLayoutEffect(() => {
    getProducts();
  }, []);
  return products;
}
