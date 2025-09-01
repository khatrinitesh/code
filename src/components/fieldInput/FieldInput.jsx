const FieldInput = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  error,
  className,
}) => {
  return (
    <div className="w-full">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${className} w-full h-[25px] outline-none  p-[5px]  border border-[#ccc] rounded bg-white text-extraSmallDescription montserrat-medium`}
      />
      {/* {error && <p className="text-red-500 text-sm mt-1">{error}</p>} */}
    </div>
  );
};

export default FieldInput;
