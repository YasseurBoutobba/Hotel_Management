import { Outlet } from "react-router-dom";

const MainRoute = () => {
  return (
    <main className=" pt-[100px] pl-[15dvw] pr-[28dvw]">
      <Outlet />
    </main>
  );
};
export default MainRoute;
