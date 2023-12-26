import NextPrevBar from "../components/NextPrevBar";
import UserListItem from "../components/UserListItem";
import users from "../data/data";
import useNextPrev from "../hooks/useNextPrev";
const Users = () => {
  const STEP = 8;
  const {
    startingIndex,
    usersNumber,
    endingIndex,
    handlePrevClick,
    handleNextClick,
  } = useNextPrev(users, STEP);

  return (
    <div className=" p-4">
      <div className=" flex justify-between items-center mb-4">
        <h1 className=" text-2xl text-primaryBlue mb-4 ">Users</h1>
        <button className=" text-gray-50 bg-primaryBlue py-2 px-4 rounded-md ">
          Add new user
        </button>
      </div>
      <ul className=" flex flex-col gap-2">
        {users.slice(startingIndex, endingIndex).map((user) => (
          <li key={user.id}>
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
      />
    </div>
  );
};
export default Users;
