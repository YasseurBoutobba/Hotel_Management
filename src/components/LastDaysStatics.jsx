const LastDayStatics = () => {
  const statics = [
    {
      name: "Booking Operations",
      value: "30,000",
    },
    {
      name: "Done Booking",
      value: "12,000",
    },
    {
      name: "Satisfied Clients",
      value: "17,000",
    },
  ];
  return (
    <div className="">
      <h1 className=" text-primaryGrey text-lg mb-4">In last 30 days,</h1>
      <div className=" w-full px-2 flex justify-between items-center">
        {statics.map((item, index) => {
          return (
            <div
              key={index}
              className=" flex flex-col gap-0 bg-card-pattern bg-cover rounded-md p-4 w-[30%]"
            >
              <h1 className=" text-gray-50 text-3xl">{item.value}</h1>
              <h1 className=" text-gray-50 text-sm">{item.name}</h1>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};
export default LastDayStatics;
