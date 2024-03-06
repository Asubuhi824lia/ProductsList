import s from "./Products.module.scss";
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

async function fetchUniqueIds({ PageNum, left, offset = 0, uniques = [] }) {
  // проверка входных данных
  if (PageItems <= 0 || left <= 0 || offset < 0) return [];

  // подгрузка
  const response = await getIds(getIdsParamCreator(offset + PageNum - 1, left));
  // проверка
  let ids = response.result;
  if (uniques.length > 0) ids = [...uniques, ...ids];
  ids = Array.from(new Set(ids));

  // достигли последней порции данных?
  if (response.result.length < left) return ids;

  // ids не хватает
  if (ids.length < PageItems) {
    // Вызываем рекурсию ради "накопления" уникальных ids до нужного кол-ва
    return await fetchUniqueIds({
      PageNum: PageNum,
      left: PageItems - ids.length,
      offset: offset + PageItems,
      uniques: ids,
    });
  } else if (ids.length === PageItems) return ids; // 50 ids найдено!
  else return ids.slice(0, PageItems - 1); // отсекаем лишние (подстраховка)
}
const removeItemsDuplicates = (items) => {
  const uniqItems = [];
  const includesId = (id) => {
    return uniqItems.find((item) => item.id === id) ? true : false;
  };
  // добавить только товар с новым id
  items.result.forEach((item) => {
    if (!includesId(item.id)) uniqItems.push(item);
  });
  return uniqItems;
};

function ProductList({ PageNum }) {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const setStatuses = (loadStatus, errStatus) => {
    setLoading(loadStatus), setError(errStatus);
  };

  useEffect(() => {
    console.log(goods);
    setLoading(true);
    fetchUniqueIds({ PageNum, left: PageItems })
      // Получение списка id товаров
      .then((ids) => getItems(getItemsParamCreator(ids)))
      // Получение списка товаров
      .then(removeItemsDuplicates)
      .then((items) => {
        console.log(items);
        setGoods(items);
        setStatuses(false, null);
      })
      .catch((err) => setStatuses(false, err.message));
  }, [PageNum]);

  return (
    <section className={s.goods}>
      {loading && <h3>Loading...</h3>}
      {!loading && error && (
        <h3>Oops, Server Error! Update or Change page, please</h3>
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
