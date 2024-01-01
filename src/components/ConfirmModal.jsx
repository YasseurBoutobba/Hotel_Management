import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/slices/userSlice";
const ConfirmMoadl = ({ show, onClose, userId }) => {
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    dispatch(deleteUser(userId));
    setTimeout(() => {
      onClose();
    }, 1000);
  };
  const handleCancel = (e) => {
    onClose();
  };

  return (
    <Modal show={show} onClose={onClose}>
      <div className="flex flex-col gap-6">
        <h1 className=" text-xl text-primaryBlue">Are You Sure?</h1>
        <p className=" text-primaryGrey">
          Please confirm this operation before we start
        </p>
        <div className=" flex items-center justify-center gap-4">
          <button
            onClick={handleDelete}
            className=" text-gray-50 text-lg border-[1px] border-primaryBlue bg-primaryBlue py-2 px-8 rounded-[5px]"
          >
            Confirm
          </button>
          <button
            onClick={handleCancel}
            className=" text-primaryGrey text-lg border-[1px] border-primaryGrey py-2 px-8 rounded-[5px]"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default ConfirmMoadl;
