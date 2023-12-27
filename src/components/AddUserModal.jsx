import CustomInput from "./CustomInput";
import Modal from "./Modal";
const AddUserModal = ({ show, onClose }) => {
  const handelSubmit = (e) => {
    e.preventDefault();
    onClose();
  };
  const handelAddUser = (e)=>{
    e.preventDefault();
    console.log("add user")

    onClose();
  }
  return (
    <Modal show={show} onClose={onClose}>
      <form className=" flex flex-col gap-4 " onSubmit={handelSubmit}>
        <CustomInput label="Name" type="text" placeholder="Enter your name" />
        <CustomInput
          label="Email"
          type="email"
          placeholder="Enter your email"
        />
        <CustomInput
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
        <CustomInput
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
        />
        <div className=" mt-2 flex items-center justify-between">
          <button onClick={handelAddUser} type="submit" className=" border-[1px] border-primaryBlue bg-primaryBlue text-gray-50 px-6 py-2 rounded-[5px]">
            Add User
          </button>
          <button className=" border-[1px] border-primaryGrey text-primaryGrey px-6 py-2 rounded-[5px]">
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};
export default AddUserModal;
