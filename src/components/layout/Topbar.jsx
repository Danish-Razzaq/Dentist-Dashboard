import { Search } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { HomeIcon } from "lucide-react";
import navConfig from "../myNav/config";
import { Link, useLocation } from "react-router-dom";
import DatePicker from "../DateRangePicker";
import RoutesLinks from "../../routes/routes";

const Topbar = ({ toggleSidebar, open }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const location = useLocation();
  // console.log("location", location);

  const pageName = RoutesLinks.find(
    (item) => item.path === location.pathname
  )?.title;

  const user = {
    name: "Britney Hardin",
    email: "britney@example.com",
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="bg-secondary text-white px-6 py-3 shadow-md">
        <div className="flex justify-between items-center w-full">
          {/* Left Section: Logo + Menu Button */}
          <div className="flex items-center gap-4">
            {!open && (
              <>
                 <Link to="/" className="flex items-center">
                <img
                  src="/logos/logomain.png"
                  alt="Logo"
                  className="w-40 rounded-full"
                />
                </Link>
                <button
                  onClick={toggleSidebar}
                  className="text-white focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Center: Search */}
          <div className="flex-1 px-8 relative">
            <div className="relative w-fit group transition-all duration-300">
              <Search className="absolute left-3 top-2.5 text-primary pointer-events-none" />

              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 text-black rounded-[3px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300  w-64 max-md:hidden group-focus-within:w-72"
              />
            </div>
          </div>

          {/* Right: User Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-md ring-2 ring-blue-500">
                <img
                  src="https://www.bootstrapget.com/demos/dental-care-admin-template/assets/images/patient1.png"
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white text-sm text-gray-800 rounded-lg shadow-xl z-50 animate-fade-in-down">
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="font-semibold text-base">{user.name}</p>
                  <p className="text-gray-500">{user.email}</p>
                </div>
                <ul className="py-1">
                  <li>
                    <button
                      onClick={() => {
                        // handle logout logic
                        alert("Logged out");
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className=" bg-white shadow-md w-full text-primary transition-all duration-300 z-10 flex sm:items-center gap-2 justify-between px-6 py-3 
      max-sm:flex-col
      overflow-hidden
      ">
        <div className="flex text-xl items-center gap-2 text-nowrap">
          <HomeIcon className="h-6 w-6 font-bold" /> / {pageName}
        </div>

        <DatePicker />
      </div>
    </>
  );
};

export default Topbar;
