import React from "react";

const FieldDropdown = ({
  id,
  name,
  value,
  onChange,
  options = [],
  maxLength = null,
  disabled = false,
  className = "",
}) => {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={(e) => {
        if (!maxLength || e.target.value.length <= maxLength) {
          onChange(e);
        }
      }}
      disabled={disabled}
      className={`
        h-[30px]
        text-extraSmallDescription montserrat-medium
        rounded 
        px-3 
        text-sm 
        bg-[#f2f5ff] 
        border-[1px]
        border-[#747eb2] 
        text-[#6973ab]
        focus:outline-none 
        focus:ring-2 
        focus:ring-[#747eb2]
        disabled:opacity-60 
        ${className}
      `}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default FieldDropdown;
