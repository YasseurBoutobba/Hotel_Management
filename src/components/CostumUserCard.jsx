const CostumUserCard = ({ name, img, role }) => {
  return (
    <div className=" flex items-center gap-2 ">
      <img className={` rounded-full ${role == "admin" ? "w-[40px] h-[40px]" : "w-[30px] h-[30px]"}`} src={img} alt="" />
      <div className=" text-start">
        <h1
          className={`${
            role === "admin"
              ? " text-lg text-primaryBlue font-semibold mb-0"
              : role === "loyal user"
              ? "text-base text-gray-800"
              : "text-base text-primaryGrey"
          }`}
        >
          {name}
        </h1>
        {role === "admin" ? (
          <h2 className=" text-base mt-0 text-primaryGrey">Admin</h2>
        ) : null}
      </div>
    </div>
  );
};
export default CostumUserCard;
