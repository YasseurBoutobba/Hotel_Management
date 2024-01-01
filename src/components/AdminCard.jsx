import CostumUserCard from "./CostumUserCard";
import adminImg from "../assets/admin.png";
import { NotificationsIcon } from "../utils/icons";
import { useSelector } from "react-redux";
const AdminCard = () => {
  const {
    nom,
    prenom,
    email
  } = useSelector((state) => state.auth.userInfo);
  const adminInfo = {
    name: nom + "" + prenom,
    role: "admin",
    img: adminImg,
  };
  return (
    <div className=" flex items-center gap-6 ">
      <CostumUserCard
        name={adminInfo.name}
        img={adminInfo.img}
        role={adminInfo.role}
      />
      <NotificationsIcon
        styles={
          " text-3xl text-primaryGrey bg-gray-50 w-[40px] h-[40px] p-2 rounded-full"
        }
      />
    </div>
  );
};
export default AdminCard;
