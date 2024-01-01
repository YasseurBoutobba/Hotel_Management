const Modal = ({ show, onClose, children }) => {
  const handelClose = (e) => {
    if (e.target.id === "modal-container") onClose();
  };
  return (
    <>
      {show ? (
        <section
          id="modal-container"
          onClick={handelClose}
          className=" fixed bg-gray-600/50 inset-0 flex justify-center z-40 items-center"
        >
          <div className=" flex justify-center items-center text-center bg-white py-8 px-20 rounded-md shadow-lg z-50 ">{children}</div>
        </section>
      ) : null}
    </>
  );
};

export default Modal;
