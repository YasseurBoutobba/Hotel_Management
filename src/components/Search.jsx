import { SearchIcon } from "../utils/icons";

const Search = () => {
  return (
    <div className=" fixed top-0 left-[15dvw] w-[59dvw] h-[70px] bg-white p-5">
      <div className="  border-[1px] border-[#E6E6E6] text-gray-800 flex items-center gap-2  bg-gray-50 py-2 px-4 rounded-md">
        <SearchIcon />
        <input
          type="text"
          name=""
          id=""
          className=" bg-transparent flex-1 text-base placeholder:text-gray-800 placeholder:font-light font-light outline-none"
          placeholder="Search users, rooms"
        />
      </div>
    </div>
  );
};
export default Search;
