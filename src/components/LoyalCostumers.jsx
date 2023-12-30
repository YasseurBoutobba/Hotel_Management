import CostumUserCard from "./CostumUserCard";
import randomImg from "../assets/admin.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoyalCustomers } from "../redux/slices/generalSlice";
const LoyalCostumers = () => {
  const loyalCostumers = useSelector((state) => state.general.loyalCustomers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLoyalCustomers());
  }, []);

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
              name={costumer?.name}
              img={randomImg}
              role="loyal user"
            />
            <span className=" text-sm text-primaryGrey">{`+${costumer?.nbr_bookings} booking`}</span>
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
