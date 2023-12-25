import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import Search from "./components/Search";
import MainRoute from "./routes/MainRoute";
import Dashboard from "./routes/Dashboard";
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
            <Route path="/" element={<Dashboard />} />
            
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
