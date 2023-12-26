import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import Search from "./components/Search";
import MainRoute from "./routes/MainRoute";
import Dashboard from "./routes/Dashboard";
import Users from "./routes/Users";
import Booking from "./routes/Booking";
import Rooms from "./routes/Rooms";
import { ToastContainer } from "react-toastify";
function App() {
  const routes = [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/booking",
      element: <Booking />,
    },
    {
      path: "/rooms",
      element: <Rooms />,
    },
  ];
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <LeftSideBar />
        <RightSideBar />
        <Search />
        <Routes>
          <Route path="/" element={<MainRoute />}>
            {routes.map((route, index) => {
              return (
                <Route key={index} path={route.path} element={route.element} />
              );
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
