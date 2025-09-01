import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { sidebarNavigation } from "../constants/constants";
import { FiMenu } from "react-icons/fi";
import FooterSection from "./footerSection/FooterSection";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="w-[200px] bg-color1 text-white p-4 bg-[var(--color1)]">
          <div className="logoBlock">
            <img
              src="/img/logo-dashboard.png"
              alt=""
              className="max-w-[120px]  block"
            />
          </div>
          <nav>
            <ul>
              {sidebarNavigation.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <li key={index} className="">
                    <Link
                      to={item.path}
                      className={`flex items-center montserrat-medium text-smallDescription  gap-[10px] p-[5px] rounded-md ${
                        isActive ? "text-color4 " : ""
                      }`}
                    >
                      <Icon className={`${isActive ? "text-color3" : ""}`} />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col ">
        {/* Header */}
        <header className="bg-[var(--color1)] text-white p-4 shadow-md flex items-center justify-between">
          {/* Left Side: Hamburger + Title */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="text-[#17668e] focus:outline-none cursor-pointer"
            >
              <FiMenu size={24} />
            </button>
            {/* <h1 className="text-subTitle montserrat-medium">Dashboard</h1> */}
          </div>

          {/* Right Side: Logo */}
          <div className="flex items-center gap-[20px]">
            <div className="profileBlock  items-center gap-[10px] hidden sm:flex">
              <span className="subtitle ext-smallDescription montserrat-regular ">
                Welcome
              </span>
              <span className="text-[var(--color6)] text-smallDescription montserrat-regular">
                Lorem Ipsum
              </span>
            </div>
            <img
              src="/img/logo.png" // adjust path as needed
              alt="Logo"
              className="h-8 w-8 object-contain"
            />
          </div>
        </header>
        {/* Main Page Content */}
        <main className="flex-1 p-6 bg-color2">{children}</main>
        <FooterSection />
      </div>
    </div>
  );
};

export default DashboardLayout;
