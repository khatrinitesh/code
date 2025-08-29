import { FaSearch } from "react-icons/fa";

const SearchComponent = ({
  placeholder = "Search...",
  maxLength = 100,
  disabled = false,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-gray-300 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      <input
        type="text"
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        className="flex-1 bg-transparent focus:outline-none text-sm text-gray-800"
      />
      <FaSearch className="text-gray-500 ml-2" />
    </div>
  );
};

export default SearchComponent;
