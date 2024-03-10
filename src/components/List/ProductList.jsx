import s from "../Products.module.scss";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import loadGoods from "../../api/custom";
import { useGoods, useStatus } from "../../hooks/context";

function ProductList({ PageNum }) {
  const { goods, setGoods } = useGoods();
  const { loading, setLoading, error, setError } = useStatus();

  const setStatuses = (loadStatus, errStatus) => {
    setLoading(loadStatus), setError(errStatus);
  };

  useEffect(() => loadGoods({ PageNum, setGoods, setStatuses }), [PageNum]);

  return (
    <section className={s.goods}>
      {loading && <h3>Loading...</h3>}
      {!loading && error && (
        <h3>Oops, we caught an Error! Update or Change page</h3>
      )}
      {!loading &&
        !error &&
        goods.length &&
        goods.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </section>
  );
}

export default ProductList;
