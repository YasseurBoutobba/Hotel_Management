import { IoMenu } from "react-icons/io5";
import { PiNotepadFill } from "react-icons/pi";
import { HiUsers } from "react-icons/hi";
import { PiBuildingsFill } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbFilterSearch } from "react-icons/tb";
import { FaCheckCircle, FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { RiSearch2Line } from "react-icons/ri";

const DashboardIcon = ({styles}) => <IoMenu className={` icon ${styles}`} />;
const BookingIcon = ({styles}) => <PiNotepadFill className={` icon ${styles}`} />;
const UsersIcon = ({styles}) => <HiUsers className={` icon ${styles}`} />;
const RoomsIcon = ({styles}) => <PiBuildingsFill className={` icon ${styles}`} />;
const NotificationsIcon = ({styles}) => <IoIosNotificationsOutline className={` icon ${styles}`} />;
const FilterIcon = ({styles}) => <TbFilterSearch className={` icon ${styles}`} />;
const CheckIcon = ({styles}) => <FaCheckCircle className={` icon ${styles}`} />;
const AcceptIcon = ({styles}) => <FaCheck className={` icon ${styles}`} />;
const CancelIcon = ({styles}) => <IoCloseSharp className={` icon ${styles}`} />;
const SettingsIcon = ({styles}) => <IoMdSettings className={` icon ${styles}`} />;
const LogoutIcon = ({styles}) => <LuLogOut className={` icon ${styles}`} />;
const CalendarIcon = ({styles}) => <BsFillCalendar2DateFill className={` icon ${styles}`} />;
const SearchIcon = ({styles}) => <RiSearch2Line className={` icon ${styles}`} />;

export {
  DashboardIcon,
  BookingIcon,
  UsersIcon,
  RoomsIcon,
  NotificationsIcon,
  FilterIcon,
  CheckIcon,
  AcceptIcon,
  CancelIcon,
  SettingsIcon,
  LogoutIcon,
  CalendarIcon,
  SearchIcon,
};
