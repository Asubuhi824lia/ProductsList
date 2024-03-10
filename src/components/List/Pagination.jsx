import s from "../Products.module.scss";
import React from "react";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

export function PaginationLine({ PageNum, setPageNum }) {
  const PageChangeHandler = (e, p) => {
    setPageNum(p);
  };

  return (
    <div className={s.pagination}>
      <Stack spacing={2}>
        <Pagination
          count={161}
          variant="outlined"
          shape="rounded"
          page={PageNum}
          onChange={PageChangeHandler}
        />
      </Stack>
    </div>
  );
}

export default PaginationLine;
