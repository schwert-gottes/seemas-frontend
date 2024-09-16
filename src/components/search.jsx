import { Search } from "@/icons";

const SearchInput = ({ isBackground }) => {
  return (
    <div className="relative w-[270px]">
      <input
        type="text"
        placeholder={isBackground ? "Search" : "Search by company name"}
        className={`w-[270px] pl-10 pr-4 rounded-full text-primary focus:outline-none ${
          isBackground
            ? "py-2 bg-[#F4F6F3]"
            : "py-[10px] border border-[#E4E4E7]"
        }`}
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <Search />
      </div>
    </div>
  );
};

export default SearchInput;
