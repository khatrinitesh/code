import { FaCalendarAlt } from "react-icons/fa";

const FieldInput = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  className,
  borderVariant = "gray", // default gray border
}) => {
  const borderClass =
    borderVariant === "blue" ? "border-[#1b7398]" : "border-[#ccc]";

  // For date type, we hide default icon and add a custom one
  const isDateType = type === "date";

  return (
    <>
      <div className={`relative w-full ${className}`}>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
          w-full 
          h-[28px] 
          outline-none  
          p-[5px] 
          border 
          ${borderClass}
          rounded 
          bg-white 
          text-extraSmallDescription 
          montserrat-medium
          ${isDateType ? "appearance-none" : ""}
        `}
        />
        {isDateType && (
          <FaCalendarAlt
            size={20}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-[#1b7398] pointer-events-none"
          />
        )}
      </div>
    </>
  );
};

export default FieldInput;
