const CustomInput = ({ onChnge, value,  ...rest }) => {
  return (
    <div>
      <input className=" px-4 py-2 bg-gray-100 text-gray-600 placeholder:text-gray-600 outline-none" onChange={onChnge} value={value} {...rest} />
    </div>
  );
};
export default CustomInput;
