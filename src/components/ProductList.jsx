import s from "./ProductList.module.scss";
import React, { useEffect, useState } from "react";
import {
  getIdsParamCreator,
  getItemsParamCreator,
} from "../api/paramsCreators";
import { getIds, getItems } from "../api/api";
// import Pagination from "./Pagination";
import ProductCard from "./ProductCard";

const response = {
  result: [
    {
      brand: null,
      id: "1789ecf3-f81c-4f49-ada2-83804dcc74b0",
      price: 16700.0,
      product: "Золотое кольцо с бриллиантами",
    },
  ],
}.result;

const PageItems = 50;

function ProductList({ PageNum }) {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(goods);
    setLoading(true);
    getIds(getIdsParamCreator(PageNum - 1, PageItems))
      .then((ids) => {
        console.log(Array.from(new Set(ids.result)));
        return getItems(getItemsParamCreator(ids.result));
      })
      .then((items) => setGoods(items.result))
      .then(() => setStatuses(false, null));
  }, [PageNum]);

  return (
    <section className={s.goods}>
      {loading && <h3>Loading...</h3>}
      {!loading &&
        goods.length &&
        goods.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </section>
  );
}

export default ProductList;
