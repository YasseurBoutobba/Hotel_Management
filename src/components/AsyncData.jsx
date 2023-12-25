const AsyncData = () => {
  return (
    <div className=" bg-gray-50 flex flex-col gap-4 mb-6 p-2 items-center">
      <h1 className=" text-lg text-primaryBlue capitalize">async data </h1>
      <p className=" text-gray-800 text-xl text-center">For async data between local storage and database.</p>
      <button className=" text-lg bg-primaryBlue py-1 px-5 rounded-md text-gray-50 font-semibold ">Async</button>
    </div>
  );
};
export default AsyncData;
