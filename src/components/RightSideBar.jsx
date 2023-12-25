import AdminCard from "./AdminCard";
import AsyncData from "./AsyncData";
import LoyalCostumers from "./LoyalCostumers";

const RightSideBar = () => {
  return (
    <aside className="text-center fixed top-0 right-0 w-[26dvw] h-[100dvh] flex flex-col justify-between items-center py-6 px-4">
      <AdminCard />
      <LoyalCostumers />
      <AsyncData />
      <p className=" self-end pr-10  text-gray-600  ">11/11/2003</p>
    </aside>
  );
};
export default RightSideBar;
