import { useDispatch, useSelector } from "react-redux";
import NextPrevBar from "../components/NextPrevBar";
import useNextPrev from "../hooks/useNextPrev";
import { useEffect, useState } from "react";
import { fetchRooms } from "../redux/slices/roomsSlice";
import RoomCard from "../components/RoomCard";
import AddRoomModal from "../components/AddRoomModal";
const Rooms = () => {
  const rooms = useSelector((state) => state.rooms.rooms);
  const changedRooms = useSelector((state) => state.rooms.changedRooms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRooms());
    console.log(rooms);
  }, [changedRooms]);

  const STEP = 7;
  const {
    startingIndex,
    usersNumber,
    endingIndex,
    handlePrevClick,
    handleNextClick,
    currentPage,
  } = useNextPrev(rooms, STEP);

  const [showAddRoom, setShowAddRoom] = useState(false);
  const onClose = () => setShowAddRoom(false);

  return (
    <section className=" p-4">
      <div className=" flex justify-between items-center mb-4">
        <AddRoomModal show={showAddRoom} onClose={onClose} />
        <h1 className=" text-2xl text-primaryBlue mb-4 ">Rooms</h1>
        <button
          onClick={() => setShowAddRoom(true)}
          className=" text-gray-50 bg-primaryBlue py-2 px-4 rounded-md "
        >
          Add new Room
        </button>
      </div>
      <ul className=" flex flex-col gap-2">
        {rooms.slice(startingIndex, endingIndex).map((room) => (
          <li key={room?._id}>
            <RoomCard room={room} />
          </li>
        ))}
      </ul>
      <NextPrevBar
        startingIndex={startingIndex}
        endingIndex={endingIndex}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
        usersNumbr={usersNumber}
        step={STEP}
        currentPage={currentPage}
      />
    </section>
  );
};
export default Rooms;
