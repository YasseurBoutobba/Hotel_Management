import BookingCard from "../components/BookingCard";
import users from "../data/data";
import NextPrevBar from "../components/NextPrevBar";
import useNextPrev from "../hooks/useNextPrev";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBooking } from "../redux/slices/bookingSlice";
const Booking = () => {
  const STEP = 8;
  const bookings = useSelector((state) => state.booking.bookings);
  const bookingChanged = useSelector((state) => state.booking.bookingChanged);
  useEffect(() => {
    dispatch(fetchBooking());
    console.log("shit runing")
  },[bookingChanged]);
  const {
    startingIndex,
    usersNumber,
    endingIndex,
    handlePrevClick,
    handleNextClick,
    currentPage
  } = useNextPrev(bookings, STEP);
  const dispatch = useDispatch();
  
  return (
    <div className=" p-4">
      <h1 className=" text-2xl text-primaryBlue mb-4 ">Booking</h1>
      <ul className=" flex flex-col gap-2">
        {bookings.slice(startingIndex, endingIndex).map((booking) => (
          <li key={booking._id}>
            <BookingCard booking={booking} />
          </li>
        ))}
      </ul>
      <NextPrevBar
        startingIndex={startingIndex}
        endingIndex={endingIndex}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
        usersNumbr={usersNumber}
        step={STEP}
        currentPage={currentPage}
      />
    </div>
  );
};
export default Booking;
