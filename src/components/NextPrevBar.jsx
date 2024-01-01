const NextPrevBar = ({
  startingIndex,
  endingIndex,
  handleNextClick,
  handlePrevClick,
  usersNumbr,
  step,
  currentPage
}) => {
  console.log("shit is : ", usersNumbr / step )
  return (
    <div className=" mt-3 text-primaryGrey flex items-center gap-4">
      <button
        onClick={handlePrevClick}
        className={`${startingIndex > 0 ? " text-gray-900 " : ""}`}
      >
        Previous page
      </button>
      <ul className=" flex gap-2 ">
        {usersNumbr > step &&
          [...Array(Math.ceil(usersNumbr / step))].map((_, index) => (
            <li
              className={` ${currentPage == index ? " text-gray-900 font-medium" : "text-gray-600"}  px-3 py-2 text-sm bg-gray-100 rounded-full`}
              key={index}
            >
              {index + 1}
            </li>
          ))}
      </ul>
      <button
        onClick={handleNextClick}
        className={`${
          endingIndex < usersNumbr ? " text-gray-900" : " cursor-not-allowed "
        }`}
      >
        Next page
      </button>
    </div>
  );
};
export default NextPrevBar;
