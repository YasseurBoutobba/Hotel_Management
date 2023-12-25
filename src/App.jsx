import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import Search from "./components/Search";
import MainRoute from "./routes/MainRoute";
import Random from "./routes/Random";
import Shit from "./routes/Shit";
function App() {
  const routes = [
    {
      path: "/",
      element: <MainRoute />,
    },
  ];
  return (
    <>
      <BrowserRouter>
        <LeftSideBar />
        <RightSideBar />
        <Search />
        <Routes>
          <Route path="/" element={<MainRoute />} >
            <Route path="/" element={<Random />} />
            <Route path="/shit" element={<Shit />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
