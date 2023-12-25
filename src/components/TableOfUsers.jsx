import image from "../assets/admin.png";
import CostumUserCard from "./CostumUserCard";
import { CheckIcon } from "../utils/icons";
import { useState } from "react";
const TableOfUsers = () => {
  const users = [
    {
      userInfo: {
        name: "John Doe1",
        img: image,
      },
      status: "Pending",
      date: {
        start: "01/15/24",
        end: "01/20/24",
      },
      suite: true,
      room: false,
    },
    {
      userInfo: {
        name: "Jane Smith",
        img: image,
      },
      status: "Approved",
      date: {
        start: "02/10/24",
        end: "02/15/24",
      },
      suite: false,
      room: true,
    },
    {
      userInfo: {
        name: "Bob Johnson",
        img: image,
      },
      status: "Declined",
      date: {
        start: "03/05/24",
        end: "03/10/24",
      },
      suite: true,
      room: false,
    },
    {
      userInfo: {
        name: "John Doe",
        img: image,
      },
      status: "Unverified",
      date: {
        start: undefined,
        end: undefined,
      },
      suite: true,
      room: false,
    },
    {
      userInfo: {
        name: "Jane Smith",
        img: image,
      },
      status: "Approved",
      date: {
        start: "02/10/24",
        end: "02/15/24",
      },
      suite: false,
      room: true,
    },
    {
      userInfo: {
        name: "Bob Johnson",
        img: image,
      },
      status: "Declined",
      date: {
        start: "03/05/24",
        end: "03/10/24",
      },
      suite: true,
      room: false,
    },
    {
      userInfo: {
        name: "John Doe",
        img: image,
      },
      status: "Pending",
      date: {
        start: "01/15/24",
        end: "01/20/24",
      },
      suite: true,
      room: false,
    },
    {
      userInfo: {
        name: "Jane Smith",
        img: image,
      },
      status: "Approved",
      date: {
        start: "02/10/24",
        end: "02/15/24",
      },
      suite: false,
      room: true,
    },
    {
      userInfo: {
        name: "Bob Johnson",
        img: image,
      },
      status: "Declined",
      date: {
        start: "03/05/24",
        end: "03/10/24",
      },
      suite: true,
      room: false,
    },
    {
      userInfo: {
        name: "John Doe2",
        img: image,
      },
      status: "Pending",
      date: {
        start: "01/15/24",
        end: "01/20/24",
      },
      suite: true,
      room: false,
    },
  ];
  const usersNumber = users.length;

  const [startingIndex, setStartingIndex] = useState(0);
  const [endingIndex, setEndingIndex] = useState(5);

  const handlePrevClick = (e) => {
    if (startingIndex > 0) {
      setStartingIndex(startingIndex - 5);
      setEndingIndex(endingIndex - 5);
    } else {
      e.preventDefault();
    }
  };
  const handleNextClick = (e) => {
    if (endingIndex < usersNumber) {
      setStartingIndex(startingIndex + 5);
      setEndingIndex(endingIndex + 5);
    } else {
      e.preventDefault();
    }
  };
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
                  name={user?.userInfo?.name}
                  role={"user"}
                  img={user.userInfo.img}
                />
              </td>
              <td>
                <span
                  className={` flex justify-center  text-sm text-gray-50 ${
                    user.status === "Pending"
                      ? "bg-primaryGrey"
                      : user.status === "Approved"
                      ? "bg-primaryGreen"
                      : user.status === "Declined"
                      ? "bg-primaryRed"
                      : " text-primaryGrey"
                  } py-1  rounded-[5px]`}
                >
                  {user.status}
                </span>
              </td>
              <td>
                <span className=" flex justify-center text-sm text-primaryGrey">
                  {user.date.start !== undefined
                    ? `${user.date.start} --> ${user.date.end}`
                    : "No date available "}
                </span>
              </td>
              <td>
                <span className=" flex justify-center">
                  <CheckIcon
                    styles={`${
                      user.suite ? "text-primaryGrey" : " text-transparent"
                    }`}
                  />
                </span>
              </td>
              <td>
                <span className=" flex justify-center">
                  <CheckIcon
                    styles={`${
                      user.room ? "text-primaryGrey" : " text-transparent"
                    }`}
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=" mt-3 text-primaryGrey flex items-center gap-4">
        <button
          onClick={handlePrevClick}
          className={`${
            startingIndex > 0 ? " text-gray-700 " : ""
          }`}
        >
          Previous page
        </button>
        <ul className=" flex gap-2 ">
          {usersNumber > 5 &&
            [...Array(Math.ceil(usersNumber / 5))].map((_, index) => (
              <li
                className=" text-gray-600 px-3 py-2 text-sm bg-gray-100 rounded-full"
                key={index}
              >
                {index + 1}
              </li>
            ))}
        </ul>
        <button
          onClick={handleNextClick}
          className={`${
            endingIndex < usersNumber ? " text-gray-700" : ""
          }`}
        >
          Next page
        </button>
      </div>
    </div>
  );
};
export default TableOfUsers;
