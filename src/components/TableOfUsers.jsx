import image from "../assets/admin.png";
import CostumUserCard from "./CostumUserCard";
import { CheckIcon } from "../utils/icons";
import NextPrevBar from "./NextPrevBar";
import useNextPrev from "../hooks/useNextPrev";
import users from "../data/data";

const TableOfUsers = () => {
  const STEP = 5;
  const {
    startingIndex,
    usersNumber,
    endingIndex,
    handlePrevClick,
    handleNextClick,
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
                <CostumUserCard
                  name={user?.userInfos?.name}
                  role={"user"}
                  img={image}
                />
              </td>
              <td>
                <span
                  className={` flex justify-center  text-sm text-gray-50 ${
                    user.bookingStatus === "Pending"
                      ? "bg-primaryGrey"
                      : user.bookingStatus === "Approved"
                      ? "bg-primaryGreen"
                      : user.bookingStatus === "Declined"
                      ? "bg-primaryRed"
                      : " text-primaryGrey"
                  } py-1  rounded-[5px]`}
                >
                  {user.bookingStatus}
                </span>
              </td>
              <td>
                <span className=" flex justify-center text-sm text-primaryGrey">
                  {user.currentBooking !== null
                    ? `${user.currentBooking.from} --> ${user.currentBooking.to}`
                    : "No date available "}
                </span>
              </td>
              <td>
                <span className=" flex justify-center">
                  <CheckIcon
                    styles={`${
                      user.currentBooking?.type === "suite"
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
                      user.currentBooking?.type === "room"
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
      />
    </div>
  );
};
export default TableOfUsers;
