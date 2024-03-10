import { createContext } from "react";

export type PagesNumContextType = {
  pagesNum: number;
  setPagesNum: (pagesNum: number) => void;
};

export const PagesNumContext = createContext<PagesNumContextType>({
  pagesNum: 161,
  setPagesNum: () => {},
});
