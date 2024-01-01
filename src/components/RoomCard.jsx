import RoomBookingModal from "./RoomBookingModal";
import { useState } from "react";
const RoomCard = ({ room }) => {
  const nbrOfBeds = () => {
    const nbr = ["", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];
    if (room?.nbr_singleBeds === 0)
      return `${nbr[room?.nbr_doubleBeds]} Double Bed`;
    if (room?.nbr_doubleBeds === 0)
      return `${nbr[room?.nbr_singleBeds]} Single Bed`;

    return `${nbr[room?.nbr_doubleBeds]} Double +  ${
      nbr[room?.nbr_doubleBeds]
    } Single Bed`;
  };

  const [showBookingModal, setShowBookingModal] = useState(false);
  const onClose = () => setShowBookingModal(false);

  return (
    <div className=" flex items-center justify-between bg-gray-50 py-3 px-4 rounded-md">
      <RoomBookingModal show={showBookingModal} onClose={onClose} roomId={room?._id} roomName={room?.name} />
      <span className=" w-[20%] text-gray-800 capitalize text-ase">
        {room?.name}
      </span>
      <span className=" w-[20%] text-primaryGrey capitalize text-ase">
        {nbrOfBeds()}
      </span>
      <span className=" w-[20%] text-primaryBlue capitalize text-ase">{` ${room?.nbr_persons} Pesron`}</span>
      <span className=" w-[20%] text-primaryGrey capitalize text-ase">
        {room?.status}
      </span>
      <button onClick={()=> setShowBookingModal(true)} className=" bg-primaryBlue px-4 py-1 text-gray-50 rounded-[5px]">
        Booking
      </button>
    </div>
  );
};
export default RoomCard;

// _id: "658a35a42207050214f09ae0"
// ​​
// name: "Room1"
// ​​
// nbr_doubleBeds: 0
// ​​
// nbr_persons: 2
// ​​
// nbr_singleBeds: 2
// ​​
// status: "not available"
// ​​
// type: "Room"
