import { useState, ReactNode } from "react";
import { Product, GoodsContext } from "./GoodsContext";

interface Props {
  children: ReactNode;
}

export const GoodsContextProvider = ({ children, ...props }: Props) => {
  const [goods, setGoods] = useState<Product[]>([]);

  return (
    <GoodsContext.Provider
      value={{
        goods,
        setGoods,
      }}
      {...props}
    >
      {children}
    </GoodsContext.Provider>
  );
};
