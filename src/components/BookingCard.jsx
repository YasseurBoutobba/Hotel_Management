import CostumUserCard from "./CostumUserCard";
import ConfirmBookingModal from "./ConfirmBookingModal";
import { AcceptIcon, CancelIcon } from "../utils/icons";
import { useState } from "react";
import image from "../assets/admin.png";
const BookingCard = ({ booking }) => {
  const [confirm, setConfirm] = useState({
    show: false,
    bookingId: booking?._id,
    status: ""
  });

  const handleAccept = (e) => {
    if (booking?.status === "Pending") {
      setConfirm({ show: true, status: "Done", bookingId: booking?._id });
    } else {
      e.preventDefault();
    }
  };
  const handleDecline = () => {
    if (booking?.status === "Pending") {
      setConfirm({ show: true, status: "Canceled", bookingId: booking?._id });
    } else {
      e.preventDefault();
    }
  };
  return (
    <div className=" flex items-center justify-between gap-6 bg-gray-50 py-2 px-4 rounded-md">
      <ConfirmBookingModal
        bookingId={confirm.bookingId}
        show={confirm.show}
        bookingStatus={confirm.status}
        onClose={() => setConfirm({ ...confirm, show: false })}
      />

      <div className=" flex  gap-6  items-center flex-1">
        <div className=" w-[150px]">
          <CostumUserCard name={booking?.name} img={image} role={"user"} />
        </div>
        <span
          className={`  w-[100px] text-center px-4  text-sm text-gray-50 ${
            booking?.status === "Pending"
              ? "bg-primaryGrey"
              : booking?.status === "Done"
              ? "bg-primaryGreen"
              : booking?.status === "Canceled"
              ? "bg-primaryRed"
              : " text-primaryGrey"
          } py-1  rounded-[5px]`}
        >
          {booking?.status}
        </span>
      </div>
      <div className=" flex-1 flex ">
        <span className="  flex-1 text-sm text-primaryGrey">
          {booking?.start_date !== ""
            ? `${booking?.start_date} --> ${booking?.end_date}`
            : "No date available "}
        </span>
        <span className=" flex-1 text-primaryGrey">
          {booking?.start_date !== "" ? booking?.room : " no room"}
        </span>
      </div>

      <div className="  flex gap-4 items-center ">
        <button onClick={handleAccept}>
          <AcceptIcon
            styles={` text-2xl text-primaryBlue ${
              booking?.status !== "Pending" ? "opacity-50 cursor-default" : ""
            }`}
          />
        </button>
        <button onClick={handleDecline}>
          <CancelIcon
            styles={` text-2xl text-primaryGrey ${
              booking?.status !== "Pending" ? "opacity-50 cursor-default" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};
export default BookingCard;
