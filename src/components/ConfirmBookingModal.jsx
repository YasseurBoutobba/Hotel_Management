import { useDispatch } from "react-redux";
import Modal from "./Modal";

const ConfirmBookingModal =({ bookingId , show, onClose})=>{
    return(
        <Modal show={show} onClose={onClose} >
            <div className="flex flex-col gap-6">
                <h1 className=" text-xl text-primaryBlue">Are You Sure?</h1>
                <p className=" text-primaryGrey">Please confirm this operation before we start</p>
                <div className=" flex items-center justify-center gap-4">
                    <button onClick={onClose} className=" text-gray-50 text-lg border-[1px] border-primaryBlue bg-primaryBlue py-2 px-8 rounded-[5px]">Confirm</button>
                    <button onClick={onClose} className=" text-primaryGrey text-lg border-[1px] border-primaryGrey py-2 px-8 rounded-[5px]">Cancel</button>
                </div>
            </div>
        </Modal>
    )
}
export default ConfirmBookingModal;