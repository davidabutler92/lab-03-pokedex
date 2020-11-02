import React from "react";
import { PER_PAGE } from '../../constants'

export default function PagingButton({ handlePaging, count, page }) {
  const totalPages = Math.ceil(count / PER_PAGE);

  return (
    <>
      <button disabled={page === 1} onClick={handlePaging.prev}>prev</button>
      <span>page {page} of {totalPages}</span>
      <button disabled={totalPages === page}onClick={handlePaging.next}>next</button>
    </>
  );
}
