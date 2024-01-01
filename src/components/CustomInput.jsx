
const CustomInput = ({ onChnge, value, children,   ...rest }) => {
  return (
    <div className=" flex items-center bg-gray-200/90 pr-2 ">
      <input className=" flex-grow px-4 py-2 bg-gray-200/90 text-gray-600 placeholder:text-gray-600 outline-none" onChange={onChnge} value={value} {...rest} />
      {children}
    </div>
  );
};
export default CustomInput;
