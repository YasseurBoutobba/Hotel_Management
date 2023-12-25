import CostumUserCard from "./CostumUserCard";
import { AcceptIcon, CancelIcon } from "../utils/icons";
const BookingCard = ({ user }) => {
  const handleAccept = () => {
    console.log("accept");
  };
  const handleDecline = () => {
    console.log("decline");
  };
  return (
    <div className=" flex items-center justify-between bg-gray-50 py-2 px-4 rounded-md">
      <CostumUserCard name={user.userInfos.name} img={""} role={"user"} />
      <span
        className={` px-4 flex justify-center  text-sm text-gray-50 ${
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
      <span className=" flex justify-center text-sm text-primaryGrey">
        {user.currentBooking.from !== undefined
          ? `${user.currentBooking.from} --> ${user.currentBooking.to}`
          : "No date available "}
      </span>
      <span className=" text-primaryGrey">{user.currentBooking.name}</span>
      <div className=" flex gap-4 items-center ">
        <button>
          <AcceptIcon styles={" text-2xl text-primaryBlue "} />
        </button>
        <button>
          <CancelIcon styles={" drop-shadow-2xl text-2xl text-primaryGrey"} />
        </button>
      </div>
    </div>
  );
};
export default BookingCard;
