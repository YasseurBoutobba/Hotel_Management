import CostumUserCard from "./CostumUserCard";
import ConfirmModal from "./ConfirmModal";
import { AcceptIcon, CancelIcon } from "../utils/icons";
import { useState } from "react";
import image from "../assets/admin.png"
const BookingCard = ({ user }) => {
  const [confirm, setConfirm] = useState({ show: false, userId: null });

  const handleAccept = (e) => {
    if (user?.bookingStatus === "Pending") {
      setConfirm({ show: true, userId: user?.id });
      console.log("accept");
    } else {
      e.preventDefault();
    }
  };
  const handleDecline = () => {
    if (user?.bookingStatus === "Pending") {
      setConfirm({ show: true, userId: user?.id });
    } else {
      e.preventDefault();
    }
  };
  return (
    <div className=" flex items-center justify-between gap-6 bg-gray-50 py-2 px-4 rounded-md">
      <ConfirmModal
        show={confirm.show}
        onClose={() => setConfirm({ ...confirm, show: false })}
      />

      <div className=" flex  gap-6  items-center flex-1">
        <div className=" w-[150px]">
          <CostumUserCard name={user?.userInfos?.name} img={image} role={"user"} />
        </div>
        <span
          className={`  w-[100px] text-center px-4  text-sm text-gray-50 ${
            user?.bookingStatus === "Pending"
              ? "bg-primaryGrey"
              : user?.bookingStatus === "Approved"
              ? "bg-primaryGreen"
              : user?.bookingStatus === "Declined"
              ? "bg-primaryRed"
              : " text-primaryGrey"
          } py-1  rounded-[5px]`}
        >
          {user?.bookingStatus}
        </span>
      </div>
      <div className=" flex-1 flex ">
        <span className=" flex-1 text-sm text-primaryGrey">
          {user?.currentBooking !== null
            ? `${user?.currentBooking?.from} --> ${user?.currentBooking?.to}`
            : "No date available "}
        </span>
        <span className=" flex-1 text-primaryGrey">
          {user?.currentBooking !== null
            ? user?.currentBooking?.name
            : " no room"}
        </span>
      </div>

      <div className="  flex gap-4 items-center ">
        <button onClick={handleAccept}>
          <AcceptIcon
            styles={` text-2xl text-primaryBlue ${
              user?.bookingStatus !== "Pending"
                ? "opacity-50 cursor-default"
                : ""
            }`}
          />
        </button>
        <button onClick={handleDecline}>
          <CancelIcon
            styles={` text-2xl text-primaryGrey ${
              user?.bookingStatus !== "Pending"
                ? "opacity-50 cursor-default"
                : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};
export default BookingCard;
