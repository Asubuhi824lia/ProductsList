import s from "./ProductList.module.scss";
import React from "react";

function ProductItem({ prod }) {
  const { brand, price, product } = prod;

  return (
    <section className={s.productItem}>
      <span className={s.product}>{product}</span>
      <span className={s.price}>{price}</span>
      <span className={s.brand}>{brand}</span>
    </section>
  );
}

export default ProductItem;
