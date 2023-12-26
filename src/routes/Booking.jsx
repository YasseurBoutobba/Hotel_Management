import BookingCard from "../components/BookingCard";
import { useState } from "react";
import users from "../data/data";
const Booking = () => {
  const [startingIndex, setStartingIndex] = useState(0);
  const [endingIndex, setEndingIndex] = useState(8);
  const usersNumber = users.length;
  const handlePrevClick = (e) => {
    if (startingIndex > 0) {
      setStartingIndex(startingIndex - 8);
      setEndingIndex(endingIndex - 8);
    } else {
      e.preventDefault();
    }
  };
  const handleNextClick = (e) => {
    if (endingIndex < usersNumber) {
      setStartingIndex(startingIndex + 8);
      setEndingIndex(endingIndex + 8);
    } else {
      e.preventDefault();
    }
  };

  return (
    <div className=" p-4">
      <h1 className=" text-2xl text-primaryBlue mb-4 ">Booking</h1>
      <ul className=" flex flex-col gap-2">
        {users.slice(startingIndex, endingIndex).map((user) => (
          <li key={user.id}>
            <BookingCard user={user} />
          </li>
        ))}
      </ul>
      <div className=" mt-3 text-primaryGrey flex items-center gap-4">
        <button
          onClick={handlePrevClick}
          className={`${startingIndex > 0 ? " text-gray-700 " : ""}`}
        >
          Previous page
        </button>
        <ul className=" flex gap-2 ">
          {usersNumber > 8 &&
            [...Array(Math.ceil(usersNumber / 8))].map((_, index) => (
              <li
                className=" text-gray-600 px-3 py-2 text-sm bg-gray-80 rounded-full"
                key={index}
              >
                {index + 1}
              </li>
            ))}
        </ul>
        <button
          onClick={handleNextClick}
          className={`${endingIndex < usersNumber ? " text-gray-700" : ""}`}
        >
          Next page
        </button>
      </div>
    </div>
  );
};
export default Booking;
