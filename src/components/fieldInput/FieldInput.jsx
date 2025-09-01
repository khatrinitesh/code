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
        className={`${className} w-full h-[35px] outline-none  p-2  border border-[#ccc] rounded bg-white text-smallDescription montserrat-medium`}
      />
      {/* {error && <p className="text-red-500 text-sm mt-1">{error}</p>} */}
    </div>
  );
};

export default FieldInput;
