import CostumUserCard from "./CostumUserCard";
import image from "../assets/admin.png";
import { CancelIcon } from "../utils/icons";
import { useState } from "react";
import ConfirmMoadl from "./ConfirmModal";
const UserListItem = ({ user }) => {
  const [confirm, setConfirm] = useState({ show: false, userId: null });
  const handleDelete = (e) => {
    setConfirm({ show: true, userId: user?.id });
  };
  return (
    <div className=" flex  px-4 py-2 bg-gray-50  items-center  ">
      <ConfirmMoadl
        show={confirm.show}
        onClose={() => setConfirm({ ...confirm, show: false })}
      />
      <div className="flex-grow flex ">
        <div className=" w-[40%]">
          <CostumUserCard
            name={`${user?.nom} ${user?.prenom}`}
            img={image}
            role={"user"}
          />
        </div>

        <span className="flex-grow text-primaryGrey">{user?.email}</span>
      </div>
      <button  className=" justify-self-end  w-[40px]" onClick={handleDelete}>
        <CancelIcon styles={"text-2xl text-gray-600"} />
      </button>
    </div>
  );
};
export default UserListItem;
