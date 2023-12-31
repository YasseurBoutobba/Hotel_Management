import AddUserModal from "../components/AddUserModal";
import NextPrevBar from "../components/NextPrevBar";
import UserListItem from "../components/UserListItem";
import useNextPrev from "../hooks/useNextPrev";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slices/userSlice";
const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const changedUsers = useSelector((state) => state.users.changedUsers);


  useEffect(() => {
    dispatch(fetchUsers());
    console.log(users)
  }, [changedUsers]);
  const STEP = 7;
  const {
    startingIndex,
    usersNumber,
    endingIndex,
    handlePrevClick,
    handleNextClick,
    currentPage
  } = useNextPrev(users, STEP);
  const [showAddUser, setShowAddUser] = useState(false);
  const onClose = () => setShowAddUser(false);
  return (
    <div className=" p-4">
      <div className=" flex justify-between items-center mb-4">
        <h1 className=" text-2xl text-primaryBlue mb-4 ">Users</h1>
        <button
          onClick={() => setShowAddUser(true)}
          className=" text-gray-50 bg-primaryBlue py-2 px-4 rounded-md "
        >
          Add new user
        </button>
        <AddUserModal show={showAddUser} onClose={onClose} />
      </div>
      <ul className=" flex flex-col gap-2">
        {users.slice(startingIndex, endingIndex).map((user) => (
          <li key={user?._id}>
            <UserListItem user={user} />
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
    </div>
  );
};
export default Users;
