import s from "./ProductList.module.scss";
import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { apiUrl, commonOptions } from "../api/constants";
import { getFields, getFiltered, getIds } from "../api/api";

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
  useEffect(() => {
    getFiltered(queryBody).then(console.log);
  }, []);

  return (
    <section>
      {response.map((prod) => (
        <ProductItem key={prod.id} prod={prod} />
      ))}
    </section>
  );
}

export default ProductList;
