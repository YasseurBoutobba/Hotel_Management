import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNbrBookings, fetchNbrDone } from "../redux/slices/generalSlice";

const LastDayStatics = () => {
  const nbrBooking = useSelector((state) => state.general.nbrBookings);
  const nbrDone = useSelector((state) => state.general.nbrDone);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNbrBookings());
    dispatch(fetchNbrDone());
  }, []);
  const statics = [
    {
      name: "Booking Operations",
      value: nbrBooking?.nbr || "0",
    },
    {
      name: "Done Booking",
      value: nbrDone?.nbr || "0",
    },
    {
      name: "Satisfied Clients",
      value: nbrBooking?.nbr - 1 || "0",
    },
  ];
  return (
    <div className="">
      <h1 className=" text-primaryGrey text-lg mb-4">In last 30 days,</h1>
      <div className=" w-full px-2 flex justify-between items-center">
        {statics.map((item, index) => {
          return (
            <div
              key={index}
              className=" flex flex-col gap-0 bg-card-pattern bg-cover rounded-md p-4 w-[30%]"
            >
              <h1 className=" text-gray-50 text-3xl">{item.value}</h1>
              <h1 className=" text-gray-50 text-sm">{item.name}</h1>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};
export default LastDayStatics;
