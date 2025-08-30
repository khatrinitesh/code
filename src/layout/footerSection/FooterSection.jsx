const FooterSection = () => {
  return (
    <footer className="bg-[var(--color7)] mt-8 p-[10px] text-sm  border-t border-gray-200">
      <span className="text-[#919191] poppins-regular text-extraSmallDescription">
        © {new Date().getFullYear()} Membership Management - Empowering Unions
        through Technology for Over 20 Years
      </span>
    </footer>
  );
};

export default FooterSection;
