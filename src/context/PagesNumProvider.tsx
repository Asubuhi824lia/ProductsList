import { useState, ReactNode } from "react";
import { PagesNumContext } from "./PagesNumContext";

interface Props {
  children: ReactNode;
}

export const PagesNumContextProvider = ({ children, ...props }: Props) => {
  const [pagesNum, setPagesNum] = useState(161);

  return (
    <PagesNumContext.Provider
      value={{
        pagesNum,
        setPagesNum,
      }}
      {...props}
    >
      {children}
    </PagesNumContext.Provider>
  );
};

export default PagesNumContextProvider;
