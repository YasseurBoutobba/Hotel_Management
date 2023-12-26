import BookingCard from "../components/BookingCard";
import users from "../data/data";
import NextPrevBar from "../components/NextPrevBar";
import useNextPrev from "../hooks/useNextPrev";
const Booking = () => {
  const STEP = 8;
  const {
    startingIndex,
    usersNumber,
    endingIndex,
    handlePrevClick,
    handleNextClick,
  } = useNextPrev(users, STEP);


  return (
    <div className=" p-4">
      <h1 className=" text-2xl text-primaryBlue mb-4 ">Booking</h1>
      <ul className=" flex flex-col gap-2">
        {users.slice(startingIndex, endingIndex).map((user) => (
          <li key={user.id}>
            <BookingCard user={user}  />
          </li>
        ))}
      </ul>
      <NextPrevBar startingIndex={startingIndex} endingIndex={endingIndex} handleNextClick={handleNextClick} handlePrevClick={handlePrevClick} usersNumbr={usersNumber} step={STEP} />
    </div>
  );
};
export default Booking;
