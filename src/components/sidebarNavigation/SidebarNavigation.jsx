import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { sidebarNavigation } from "../../constants/constants";

const SidebarNavigation = () => {
  const location = useLocation();
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Auto open dropdown if child path is active
  useEffect(() => {
    const newOpenState = {};
    sidebarNavigation.forEach((item) => {
      if (item.children) {
        item.children.forEach((child) => {
          if (location.pathname === child.path) {
            newOpenState[item.label] = true;
          }
        });
      }
    });
    setOpenDropdowns((prev) => ({ ...prev, ...newOpenState }));
  }, [location.pathname]);

  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <nav aria-label="Sidebar Navigation">
      <ul>
        {sidebarNavigation.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          if (item.children && item.children.length > 0) {
            const isOpen = openDropdowns[item.label];

            return (
              <li key={index}>
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="flex w-full items-center montserrat-medium text-extraSmallDescription gap-[5px] p-[5px] rounded-md transition focus:outline-none"  
                  aria-expanded={isOpen ? "true" : "false"}
                  aria-controls={`dropdown-${index}`}
                >
                  {Icon && <Icon className="text-base" />}
                  <span>{item.label}</span>
                  {/* <span className="ml-auto text-xs">{isOpen ? "▲" : "▼"}</span> */}
                </button>

                <ul
                  id={`dropdown-${index}`}
                  className={`transition-all duration-300 overflow-hidden pl-6 space-y-1 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {item.children.map((child, childIndex) => {
                    const ChildIcon = child.icon; // get the icon component
                    const childIsActive = location.pathname === child.path;

                    return (
                      <li key={childIndex}>
                        <Link
                          to={child.path}
                          className={`flex items-center text-extraSmallDescription  rounded-md transition ${
                            childIsActive ? "text-color4 font-semibold" : ""
                          }`}
                        >
                          {ChildIcon && (
                            <ChildIcon className="mr-2 text-base" />
                          )}
                          {child.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          }

          return (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center montserrat-medium text-extraSmallDescription gap-[10px] p-[3px] rounded-md  transition ${
                  isActive ? "text-color4 font-semibold" : ""
                }`}
              >
                {Icon && (
                  <Icon className={`${isActive ? "text-color3" : ""}`} />
                )}
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarNavigation;
