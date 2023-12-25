import CostumUserCard from "./CostumUserCard";
import randomImg from "../assets/admin.png";
import { useState } from "react";
const LoyalCostumers = () => {
  const loyalCostumers = [
    {
      name: "John Doe",
      userImg: randomImg,
      booking: "10",
    },
    {
      name: "Jane Doe",
      userImg: randomImg,
      booking: "9",
    },
    {
      name: "John Smith",
      userImg: randomImg,
      booking: "8",
    },
    {
      name: "Jane Smith",
      userImg: randomImg,
      booking: "7",
    },
    {
      name: "John Doe",
      userImg: randomImg,
      booking: "6",
    },
    {
      name: "Jane Doe",
      userImg: randomImg,
      booking: "5",
    },
    {
      name: "John Smith",
      userImg: randomImg,
      booking: "4",
    },
    {
      name: "Jane Smith",
      userImg: randomImg,
      booking: "3",
    },
    {
      name: "John Doe",
      userImg: randomImg,
      booking: "2",
    },
    {
      name: "Jane Doe",
      userImg: randomImg,
      booking: "1",
    },
  ];
  const [shownCostumers, setShownCostumers] = useState(2);
  const handleClick = (e) => {
    if (e.target.innerText === "View More") {
      setShownCostumers(4);
      e.target.innerText = "View Less";
    } else {
      setShownCostumers(2);
      e.target.innerText = "View More";
    }
  };
  return (
    <div className="  flex flex-col gap-6">
      <h1 className=" text-lg text-primaryBlue">Loyal Customers</h1>
      <ul className=" flex flex-col items-center  gap-4">
        {loyalCostumers.slice(0, shownCostumers).map((costumer, index) => (
          <li key={index} className=" flex items-center gap-4">
            <CostumUserCard
              name={costumer.name}
              img={costumer.userImg}
              role="loyal user"
            />
            <span className=" text-sm text-primaryGrey">{`+${costumer.booking} booking`}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={handleClick}
        className=" text-sm bg-primaryBlue self-center px-4 py-2 text-gray-50 rounded-md font-semibold"
      >
        View More
      </button>
    </div>
  );
};

export default LoyalCostumers;
