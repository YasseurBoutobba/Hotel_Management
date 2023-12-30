import { createUser } from "../redux/slices/userSlice";
import CustomInput from "./CustomInput";
import Modal from "./Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
const AddUserModal = ({ show, onClose }) => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userStatus, setUserStatus] = useState("");
  const handelFirstNameChange = (e) => {
    setUserFirstName(e.target.value);
  };
  const handelLastNameChange = (e) => {
    setUserLastName(e.target.value);
  };
  const handelEmailChange = (e) => {
    setUserEmail(e.target.value);
  };
  const handelPasswordChange = (e) => {
    setUserPassword(e.target.value);
  };
  const handelStatusChange = (e) => {
    setUserStatus(e.target.value);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };
  const dispatch = useDispatch();
  const handelAddUser = (e) => {
    e.preventDefault();
    console.log("add user");
    if(userFirstName === "" || userLastName === "" || userEmail === "" || userPassword === "" || userStatus === "") onClose();

    dispatch(
      createUser({
        nom: userFirstName,
        prenom: userLastName,
        email: userEmail,
        password: userPassword,
        status: userStatus,
      })
    );
    setTimeout(()=>{
      onClose();
    }, 1000)
  };
  return (
    <Modal show={show} onClose={onClose}>
      <form className=" flex flex-col gap-4 ">
        <CustomInput
          onChnge={handelFirstNameChange}
          value={userFirstName}
          type="text"
          placeholder="Enter your first name"
        />
        <CustomInput
          onChnge={handelLastNameChange}
          value={userLastName}
          type="text"
          placeholder="Enter your last name"
        />
        <CustomInput
          onChnge={handelEmailChange}
          value={userEmail}
          type="email"
          placeholder="Enter your email"
        />
        <CustomInput
          onChnge={handelPasswordChange}
          value={userPassword}
          type="password"
          placeholder="Enter your password"
        />
        <CustomInput
          onChnge={handelStatusChange}
          value={userStatus}
          type="text"
          placeholder="Status : super || normal"
        />
        <div className=" mt-2 flex items-center justify-between">
          <button
            onClick={handelAddUser}
            type="submit"
            className=" border-[1px] border-primaryBlue bg-primaryBlue text-gray-50 px-6 py-2 rounded-[5px]"
          >
            Add User
          </button>
          <button
            onClick={handleCancel}
            className=" border-[1px] border-primaryGrey text-primaryGrey px-6 py-2 rounded-[5px]"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};
export default AddUserModal;
