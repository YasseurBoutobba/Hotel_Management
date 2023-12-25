import {
  DashboardIcon,
  BookingIcon,
  UsersIcon,
  RoomsIcon,
  SettingsIcon,
  LogoutIcon,
} from "../icons";
import logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
const LeftSideBar = () => {
  const { pathname } = useLocation();
  const links = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      path: "/",
    },
    {
      name: "Booking",
      icon: <BookingIcon />,
      path: "/booking",
    },
    {
      name: "Users",
      icon: <UsersIcon />,
      path: "/users",
    },
    {
      name: "Rooms",
      icon: <RoomsIcon />,
      path: "/rooms",
    },
  ];
  const links2 = [
    {
      name: "Settings",
      icon: <SettingsIcon />,
      path: "/settings",
    },
    {
      name: "Logout",
      icon: <LogoutIcon />,
      path: "/logout",
    },
  ]
  return (
    <nav className=" fixed top-0 left-0 w-[15dvw] h-[100dvh] text-lg  text-primaryGrey  bg-gray-100 flex flex-col justify-between items-center py-8">
      <Link to='/'>
        <img className=" w-[80px] h-auto" src={logo} alt="" />
      </Link>
      <ul className=" flex flex-col w-full px-6 gap-6 mb-8">
        {links.map((link, i) => (
          <li key={i} className={` ${pathname === link.path ? "active-link" : ""}`}>
            <Link className=" flex items-center gap-2  " to={link.path}>
              {link.icon}
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className=" flex flex-col w-full px-6 gap-6">
        {links2.map((link, i) => (
          <li key={i} className={`${pathname === link.path ? "active-link" : ""}`}>
            <Link className=" flex items-center gap-2  " to={link.path}>
              {link.icon}
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      
    </nav>
  );
};
export default LeftSideBar;
