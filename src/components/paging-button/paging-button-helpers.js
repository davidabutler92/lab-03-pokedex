import { PER_PAGE } from '../../constants.js';

export const isNextDisabled = (count, currentPage, increment) => {
  const maxPages = Math.ceil(count / PER_PAGE);
  return currentPage + 1 > maxPages
};
export const isPreviousDisabled = (currentPage, increment) => {
  return currentPage - 1 <= 0;
};