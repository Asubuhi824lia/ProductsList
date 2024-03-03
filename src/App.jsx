import { useState } from "react";
import s from "./App.module.scss";
import ProductList from "./components/ProductList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <ProductList />
    </>
  );
}

export default App;
