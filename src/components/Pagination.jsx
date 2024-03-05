import s from "./ProductList.module.scss";
import React from "react";

function Pagination({ PageNum, setPageNum }) {
  const onPrevBtnHandler = () => {
    if (PageNum > 1) setPageNum(PageNum - 1);
  };
  const onNextBtnHandler = () => {
    setPageNum(PageNum + 1);
  };

  return (
    <div>
      <button onClick={onPrevBtnHandler} disabled={PageNum === 1}>
        prev
      </button>
      <span>{PageNum}</span>
      <button onClick={onNextBtnHandler}>next</button>
    </div>
  );
}

export default Pagination;
