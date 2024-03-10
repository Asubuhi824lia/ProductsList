import s from "../Products.module.scss";
import { FilterFields, FilterItem } from "./FilterItem";
import { Stack } from "@mui/material";

function ProductFilter() {
  return (
    <>
      <Stack spacing={2} direction="row" className={s.filters}>
        <FilterItem field={FilterFields.BRAND} />
        <FilterItem field={FilterFields.PRICE} />
        <FilterItem field={FilterFields.PRODUCT} />
      </Stack>
    </>
  );
}

export default ProductFilter;
