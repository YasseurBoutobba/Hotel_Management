import Modal from "./Modal"
import CustomInput from "./CustomInput"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRoom } from "../redux/slices/roomsSlice";

const AddRoomModal = ({show, onClose})=>{
    const [roomType, setRoomType] = useState("");
  const [nbrPersons, setNbrPersons] = useState(null);
  const [nbrDoubleBeds, setNbrDoubleBeds] = useState(null);
  const [nbrSingleBeds, setNbrSingleBeds] = useState(null);
  const handelRoomTypeChange = (e) => {
    setRoomType(e.target.value);
  };
  const handelNbPersonsChange = (e) => {
    setNbrPersons(e.target.value);
  };
  const handelNbrDoubleBedsChange = (e) => {
    setNbrDoubleBeds(e.target.value);
  };
  const handelNbrSingleBedsChange = (e) => {
    setNbrSingleBeds(e.target.value);
  };
 
  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };
  const dispatch = useDispatch();
  const handelAddRoom = (e) => {
    e.preventDefault();
    if(roomType === "" || nbrPersons === "" || nbrDoubleBeds === "" || nbrSingleBeds === "" ) onClose();

    dispatch(createRoom(
        {
            type : roomType,
            nbr_persons : nbrPersons,
            nbr_doubleBeds : nbrDoubleBeds,
            nbr_singleBeds : nbrSingleBeds,
        }
    ))
    setTimeout(()=>{
      onClose();
    }, 1000)
  };
    return(
        <Modal show={show} onClose={onClose}>
            <form className=" flex flex-col gap-4 ">
        <CustomInput
          onChnge={handelRoomTypeChange}
          value={roomType}
          type="text"
          placeholder="Room Type : Room || Suite"
        />
        <CustomInput
          onChnge={handelNbPersonsChange}
          value={nbrPersons}
          type="number"
          placeholder="Number of persons"
        />
        <CustomInput
          onChnge={handelNbrDoubleBedsChange}
          value={nbrDoubleBeds}
          type="number"
          placeholder="Number of double beds"
        />
        <CustomInput
          onChnge={handelNbrSingleBedsChange}
          value={nbrSingleBeds}
          type="number"
          placeholder="Number of single beds"
        />
        
        <div className=" mt-2 flex items-center justify-between">
          <button
            onClick={handelAddRoom}
            type="submit"
            className=" border-[1px] border-primaryBlue bg-primaryBlue text-gray-50 px-6 py-2 rounded-[5px]"
          >
            Add Room
          </button>
          <button
            onClick={handleCancel}
            className=" border-[1px] border-primaryGrey text-primaryGrey px-6 py-2 rounded-[5px]"
          >
            Cancel
          </button>
        </div>
      </form>
        </Modal>
    )
}
export default AddRoomModal;

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