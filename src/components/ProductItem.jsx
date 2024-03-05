import s from "./ProductList.module.scss";
import React from "react";

function ProductItem({ prod }) {
  const { brand, price, product } = prod;

  return (
    <section className={s.productItem}>
      <div className={s.product}>{product}</div>
      <div className={s.addInfo}>
        <div className={s.addInfo__brand}>{brand}</div>
        <div className={s.addInfo__price}>{price}</div>
      </div>
    </section>
  );
}

export default ProductItem;
