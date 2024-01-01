import image from "../assets/admin.png";
import CostumUserCard from "./CostumUserCard";
import { CheckIcon } from "../utils/icons";
import NextPrevBar from "./NextPrevBar";
import useNextPrev from "../hooks/useNextPrev";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBooking } from "../redux/slices/bookingSlice";
const TableOfUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.booking.bookings);
  const usersChanged = useSelector((state) => state.booking.bookingChanged);
  useEffect(() => {
    dispatch(fetchBooking());
    console.log("shit runing");
  }, [usersChanged]);

  const STEP = 5;
  const {
    startingIndex,
    usersNumber,
    endingIndex,
    handlePrevClick,
    handleNextClick,
    currentPage
  } = useNextPrev(users, STEP);

  return (
    <div>
      <div className=" my-3">
        <h1 className=" text-lg ">All Users</h1>
        <p className=" text-primaryGrey ">Monitor users, Booking, etc.</p>
      </div>
      <table className=" w-full  table-auto">
        <thead className="  bg-gray-100 py-2  border-[1px] rounded-sm border-gray-200">
          <tr className=" font-medium">
            <th className=" font-normal">User</th>
            <th className=" font-normal">Status</th>
            <th className=" font-normal">Date</th>
            <th className=" font-normal">Suite</th>
            <th className=" font-normal">Room</th>
          </tr>
        </thead>
        <tbody>
          {users.slice(startingIndex, endingIndex).map((user, index) => (
            <tr key={index} className=" border-b-[1px] bg-gray-50">
              <td className="pl-2 py-3">
                <CostumUserCard name={user?.name} role={"user"} img={image} />
              </td>
              <td>
                <span
                  className={` flex justify-center  text-sm text-gray-50 ${
                    user?.status === "Pending"
                      ? "bg-primaryGrey"
                      : user?.status === "Done"
                      ? "bg-primaryGreen"
                      : user?.status === "Canceled"
                      ? "bg-primaryRed"
                      : " text-primaryGrey"
                  } py-1  rounded-[5px]`}
                >
                  {user?.status}
                </span>
              </td>
              <td>
                <span className=" flex justify-center text-sm text-primaryGrey">
                  {user?.start_date !== ""
                    ? `${user?.start_date} --> ${user?.end_date}`
                    : "No date available "}
                </span>
              </td>
              <td>
                <span className=" flex justify-center">
                  <CheckIcon
                    styles={`${
                      user?.room.toLowerCase().includes("suite")
                        ? "text-primaryGrey"
                        : " text-transparent"
                    }`}
                  />
                </span>
              </td>
              <td>
                <span className=" flex justify-center">
                  <CheckIcon
                    styles={`${
                      user?.room.toLowerCase().includes("room")
                        ? "text-primaryGrey"
                        : " text-transparent"
                    }`}
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
export default TableOfUsers;
