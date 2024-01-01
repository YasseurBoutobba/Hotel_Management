import { useState } from "react";
const useNextPrev = (users, STEP) => {
  const [startingIndex, setStartingIndex] = useState(0);
  const [endingIndex, setEndingIndex] = useState(STEP);
  const [currentPage, setCurrentPage] = useState(0);
  const usersNumber = users.length;
  const handlePrevClick = (e) => {
    if (startingIndex > 0) {
      setStartingIndex(startingIndex - STEP);
      setEndingIndex(endingIndex - STEP);
      setCurrentPage(currentPage - 1);
    } else {
      e.preventDefault();
    }
  };
  const handleNextClick = (e) => {
    if (endingIndex < usersNumber) {
      setStartingIndex(startingIndex + STEP);
      setEndingIndex(endingIndex + STEP);
      setCurrentPage(currentPage + 1);
    } else {
      e.preventDefault();
    }
  };
  return { startingIndex,usersNumber , endingIndex, handlePrevClick, handleNextClick, currentPage };
};
export default useNextPrev;