import LastDayStatics from "../components/LastDaysStatics";
import TableOfUsers from "../components/TableOfUsers";

const Dashboard = () => {
  return (
    <div className=" w-full h-full px-4">
      <LastDayStatics />
      <TableOfUsers />
    </div>
  );
};
export default Dashboard;
