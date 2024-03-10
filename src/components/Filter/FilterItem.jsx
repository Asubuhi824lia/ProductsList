import s from "../Products.module.scss";
import { useEffect, useState } from "react";
import { getFiltered, getItems } from "../../api/api";
import { getFilteredParamCreator } from "../../api/paramsCreators";
import getGoods from "../../api/custom";
import { useGoods, useStatus } from "../../hooks/context";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const FilterFields = {
  BRAND: {
    en: "brand",
    ru: "Бренд",
  },
  PRICE: {
    en: "price",
    ru: "Цена",
  },
  PRODUCT: {
    en: "product",
    ru: "Название",
  },
};

export function FilterItem({ field }) {
  const [input, setInput] = useState("");

  const { setGoods } = useGoods();
  const { setLoading, setError } = useStatus();

  const setStatuses = (loadStatus, errStatus) => {
    setLoading(loadStatus), setError(errStatus);
  };

  const clickHandler = async () => {
    // get filtered ids
    const ids = await getFiltered(
      getFilteredParamCreator(field.en, input)
    ).then((res) => res.result);
    // перестроить пагинацию

    // get filtered prods
    const items = getItems({ ids })
      .then((res) => res.result)
      .then(setGoods);
  };

  return (
    <Stack spacing={1} direction="row">
      <TextField
        label={field.ru}
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="outlined" onClick={clickHandler}>
        Filter
      </Button>
    </Stack>
  );
}
