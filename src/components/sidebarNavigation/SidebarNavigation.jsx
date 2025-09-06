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

  // Check if item or its children are active
  const isIconActive = (item) => {
    if (item.path === location.pathname) return true;
    if (item.children) {
      return item.children.some((child) => child.path === location.pathname);
    }
    return false;
  };

  return (
    <nav aria-label="Sidebar Navigation">
      <ul>
        {sidebarNavigation.map((item, index) => {
          const Icon = item.icon;
          const isParentActive = isIconActive(item);

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
                  {Icon && (
                    <Icon
                      className="text-base"
                      style={{ color: isParentActive ? "#eb973a" : "inherit" }}
                    />
                  )}
                  <span
                    className={`${isParentActive ? "text-[#b5f5f8] " : ""}`}
                  >
                    {item.label}
                  </span>
                </button>

                <ul
                  id={`cursor-pointer  dropdown-${index}`}
                  className={`transition-all duration-300 overflow-hidden pl-6 space-y-1 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {item.children.map((child, childIndex) => {
                    const ChildIcon = child.icon;
                    const childIsActive = location.pathname === child.path;

                    return (
                      <li key={childIndex}>
                        <Link
                          to={child.path}
                          className={`cursor-pointer flex items-center text-extraSmallDescription rounded-md transition ${
                            childIsActive ? "" : ""
                          }`}
                          style={{
                            color: childIsActive
                              ? "#b5f5f8"
                              : isParentActive
                              ? "#b5f5f8"
                              : "inherit",
                          }}
                        >
                          {ChildIcon && (
                            <ChildIcon
                              className="mr-2 text-base"
                              style={{
                                color: childIsActive
                                  ? "#eb973a"
                                  : isParentActive
                                  ? "inherit"
                                  : "inherit",
                              }}
                            />
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
                className={`flex items-center montserrat-medium text-extraSmallDescription gap-[10px] p-[3px] rounded-md transition ${
                  isParentActive ? "" : ""
                }`}
                style={{
                  color: isParentActive ? "#b5f5f8" : "inherit",
                }}
              >
                {Icon && (
                  <Icon
                    className="text-base"
                    style={{ color: isParentActive ? "#eb973a" : "inherit" }}
                  />
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
