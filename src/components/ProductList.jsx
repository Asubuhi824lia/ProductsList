import s from "./ProductList.module.scss";
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import {
  getIdsParamCreator,
  getItemsParamCreator,
} from "../api/paramsCreators";
import { getIds, getItems } from "../api/api";
import Pagination from "./Pagination";

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

const queryBody = {
  action: "filter",
  params: { price: 17500.0 },
};
const PageItems = 50;

function ProductList({}) {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [PageNum, setPageNum] = useState(1);

  useEffect(() => {
    console.log(PageNum);
    setLoading(true);
    getIds(getIdsParamCreator(PageNum - 1, PageItems))
      .then((ids) => getItems(getItemsParamCreator(ids.result)))
      .then((items) => setGoods(items.result))
      .then(() => setLoading(false));
  }, [PageNum]);

  return (
    <main>
      <section>
        {loading && <h3>Loading...</h3>}
        {!loading &&
          goods.length &&
          goods.map((product) => (
            <ProductItem key={product.id} prod={product} />
          ))}
      </section>
      <Pagination PageNum={PageNum} setPageNum={setPageNum} />
    </main>
  );
}

export default ProductList;
