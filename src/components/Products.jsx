import s from "./Products.module.scss";
import { useState } from "react";
import PaginationLine from "./Pagination";
import ProductList from "./ProductList";

function Products() {
  const [PageNum, setPageNum] = useState(1);

  return (
    <article className={s.container}>
      <PaginationLine PageNum={PageNum} setPageNum={setPageNum} />
      <ProductList PageNum={PageNum} />
      <PaginationLine PageNum={PageNum} setPageNum={setPageNum} />
    </article>
  );
}

export default Products;
