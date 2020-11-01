import React from "react";
import { isNextDisabled, isPreviousDisabled } from "./paging-button-helpers";

export default function PagingButton({ increment, handlePaging, count, page }) {
  return (
    <button
      onClick={handlePaging}
      disabled={
        increment > 0
          ? isNextDisabled(count, page, increment)
          : isPreviousDisabled(count, page, increment)
      }
    >{`${increment > 0 ? "Next" : "Prev"} ${increment} Page`}</button>
  );
}
