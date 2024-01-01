import { useState } from "react";
import Modal from "./Modal";
import CustomInput from "./CustomInput";
import { CalendarIcon } from "../utils/icons";
const RoomBookingModal = ({ show, roomName, roomId, onClose }) => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const handelNameChange = (e) => {
    setName(e.target.value);
  };
  const handelStartDateChange = (e) => {
    setStartDate(e.target.value);
  };
  const handelEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <Modal show={show} onClose={onClose}>
      <form className=" flex flex-col gap-4 ">
        <h1 className=" text-primaryBlue text-lg text-center">Add Booking</h1>

        <CustomInput
          onChnge={handelNameChange}
          value={name}
          type="text"
          placeholder="Name"
        />
        <CustomInput value={roomName} type="text" placeholder={roomName} />
        <div className=" mt-2 flex items-center gap-4">
          <CustomInput
            onChnge={handelStartDateChange}
            value={startDate}
            type="text"
            placeholder="Start Date"
          >
            <CalendarIcon styles={" text-primaryGrey"} />
          </CustomInput>
          <CustomInput
            onChnge={handelEndDateChange}
            value={endDate}
            type="text"
            placeholder="End Date"
          >
            <CalendarIcon styles={" text-primaryGrey"} />
          </CustomInput>
        </div>
        <div className=" mt-2 flex items-center justify-between gap-4">
          <button
            type="submit"
            className=" border-[1px] border-primaryBlue bg-primaryBlue text-gray-50 px-6 py-2 rounded-[5px]"
          >
            Add User
          </button>
          <button className=" border-[1px] border-primaryGrey text-primaryGrey px-6 py-2 rounded-[5px]">
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};
export default RoomBookingModal;
