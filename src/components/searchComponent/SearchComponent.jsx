import { FaSearch } from "react-icons/fa";

const SearchComponent = ({
  placeholder = "Search...",
  maxLength = 100,
  disabled = false,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center text-extraSmallDescription bg-white  px-4 py-2 shadow-sm border-[3px] border-[var(--color5)] h-[35px]  ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      <input
        type="text"
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        className="flex-1 bg-transparent focus:outline-none text-sm text-gray-800 h-[40px]"
      />
      <FaSearch className="text-color5 ml-2" />
    </div>
  );
};

export default SearchComponent;
