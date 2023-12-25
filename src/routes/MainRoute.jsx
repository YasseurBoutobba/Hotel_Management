import { Outlet } from "react-router-dom";

const MainRoute = () => {
  return (
    <main className=" pt-[80px] pl-[15dvw] pr-[26dvw]">
      <Outlet />
    </main>
  );
};
export default MainRoute;
