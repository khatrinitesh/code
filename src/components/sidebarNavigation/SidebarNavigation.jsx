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
  const isActive = (item) => {
    if (item.path === location.pathname) return true;
    return item.children?.some((child) => child.path === location.pathname);
  };

  return (
    <nav aria-label="Sidebar Navigation">
      <ul>
        {sidebarNavigation.map((item, index) => {
          const Icon = item.icon;
          const isParentActive = isActive(item);
          const isOpen = openDropdowns[item.label];

          return (
            <li key={index} className="mb-1">
              {item.children ? (
                <>
                  {/* Parent dropdown button */}
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex w-full items-center montserrat-medium text-extraSmallDescription gap-2 px-2 py-1 rounded-md transition focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`dropdown-${index}`}
                  >
                    {Icon && (
                      <Icon
                        className="text-base"
                        style={{
                          color: isParentActive ? "#eb973a" : "inherit",
                        }}
                      />
                    )}
                    <span className={isParentActive ? "text-[#b5f5f8]" : ""}>
                      {item.label}
                    </span>
                  </button>

                  {/* Dropdown children */}
                  <ul
                    id={`dropdown-${index}`}
                    className={`pl-6 transition-all duration-300 overflow-hidden space-y-1 ${
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
                            className="flex items-center text-extraSmallDescription rounded-md px-2 py-1 transition"
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
                </>
              ) : (
                // No children: Direct Link
                <Link
                  to={item.path}
                  className="flex items-center montserrat-medium text-extraSmallDescription gap-2 px-2 py-1 rounded-md transition"
                  style={{
                    color: isParentActive ? "#b5f5f8" : "inherit",
                  }}
                >
                  {Icon && (
                    <Icon
                      className="text-base"
                      style={{
                        color: isParentActive ? "#eb973a" : "inherit",
                      }}
                    />
                  )}
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarNavigation;
