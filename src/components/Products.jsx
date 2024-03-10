import s from "./Products.module.scss";
import { useState } from "react";
import PaginationLine from "./List/Pagination";
import ProductList from "./List/ProductList";
import ProductFilter from "./Filter/ProductFilter";

function Products() {
  const [PageNum, setPageNum] = useState(1);

  return (
    <article className={s.container}>
      <ProductFilter />
      <PaginationLine PageNum={PageNum} setPageNum={setPageNum} />
      <ProductList PageNum={PageNum} />
      <PaginationLine PageNum={PageNum} setPageNum={setPageNum} />
    </article>
  );
}

export default Products;
