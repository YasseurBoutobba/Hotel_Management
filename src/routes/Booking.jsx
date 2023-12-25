import BookingCard from "../components/BookingCard";

const Booking = () => {
  return (
    <div className=" p-4">
      <h1 className=" text-2xl text-primaryBlue mb-4 ">Booking</h1>
      <ul className=" flex flex-col gap-2">
        <li>
          <BookingCard
            user={{
              userInfos: {
                name: "John",
                age: 30,
                email: "john@example.com",
                password: "123456789",
                role: "user",
              },
              bookingStatus: "Approved",
              currentBooking: {
                type: "room",
                name: "room1",
                from: "2021-10-15",
                to: "2021-11-24",
              },
              loyalUser: true,
              numberOfBooking: 7,
              id: 1,
            }}
          />
        </li>
      </ul>
    </div>
  );
};
export default Booking;
