import s from "./ProductList.module.scss";
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import {
  getIdsParamCreator,
  getItemsParamCreator,
} from "../api/paramsCreators";
import { getIds, getItems } from "../api/api";

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

function ProductList({}) {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    getIds(getIdsParamCreator(0, 50))
      .then((ids) => getItems(getItemsParamCreator(ids.result)))
      .then((items) => setGoods(items.result));
  }, []);

  return (
    <section>
      {goods.length &&
        goods.map((product) => <ProductItem key={product.id} prod={product} />)}
    </section>
  );
}

export default ProductList;
