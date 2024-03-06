import s from "./App.module.scss";
import { useState } from "react";
import PaginationLine from "./components/Pagination";
import ProductList from "./components/ProductList";

function App() {
  const [PageNum, setPageNum] = useState(1);

  return (
    <main>
      <article className={s.container}>
        <PaginationLine PageNum={PageNum} setPageNum={setPageNum} />
        <ProductList PageNum={PageNum} />
        <PaginationLine PageNum={PageNum} setPageNum={setPageNum} />
      </article>
    </main>
  );
}

export default App;
