const FieldInput = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  error,
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
        className="w-full p-2 border rounded bg-white"
      />
      {/* {error && <p className="text-red-500 text-sm mt-1">{error}</p>} */}
    </div>
  );
};

export default FieldInput;
