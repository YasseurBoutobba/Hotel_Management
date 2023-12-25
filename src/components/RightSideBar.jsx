import AdminCard from "./AdminCard";
import AsyncData from "./AsyncData";
import LoyalCostumers from "./LoyalCostumers";

const RightSideBar = () => {
  return (
    <div className="text-center fixed top-0 right-0 w-[28dvw] h-[100dvh] flex flex-col justify-between items-center py-6">
      <AdminCard />
      <LoyalCostumers />
      <AsyncData />
    </div>
  );
};
export default RightSideBar;
