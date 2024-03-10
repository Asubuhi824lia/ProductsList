import { createContext } from "react";

export type Product = {
  brand: null | string;
  id: string;
  price: number;
  product: string;
};

export type GoodsContextType = {
  goods: Array<Product>;
  setGoods: (goods: Array<Product>) => void;
};

export const GoodsContext = createContext<GoodsContextType>({
  goods: [],
  setGoods: () => {},
});
