import { useContext } from "react";
import { GoodsContext } from "../context/GoodsContext";
import { StatusContext } from "../context/StatusContext";

export const useGoods = () => useContext(GoodsContext);
export const useStatus = () => useContext(StatusContext);
