const Button = ({
  label,
  onClick,
  isLoading = false,
  className = "",
  type = "submit",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={`bg-[var(--color1)] mx-auto block text-white px-4 py-2 rounded ${className}`}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};

export default Button;
