// Sidebar.jsx
import React, { use, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { User } from "lucide-react";
import navConfig from "../myNav/config";
import { ChevronDown, ChevronUp } from "lucide-react"; // Optional icons for toggle

export function DrawerSidebar({ open, toggleSidebar, DrawerRef }) {
  const location = useLocation();
  const [showProfile, setShowProfile] = useState(window.innerWidth >= 1168);
  const [openGroups, setOpenGroups] = useState({});

  const toggleGroup = (group) => {
    setOpenGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
  };

  useEffect(() => {
    const handleResize = () => {
      setShowProfile(window.innerWidth >= 1168);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCLoseDrawerMobile = () => {
    if (window.innerWidth < 1200) {
      toggleSidebar();
    }
  };

  return (
    <div
      ref={DrawerRef}
      className={`
    bg-white border-r border-gray-200 transition-all duration-300
    ${
      window.innerWidth < 1200
        ? `fixed top-0 pt-4 left-0 h-full w-64 z-[9999] shadow-lg ${
            open ? "block" : "hidden"
          }`
        : `h-full ${open ? "w-64 py-3  px-0" : "w-0 overflow-hidden"}`
    }`}
    >
      {open && (
        <>
          <div className="mb-6 pl-3 border-b-2 border-gray-200 pb-2 flex justify-between items-center ">
            <Typography
              variant="h5"
              color="blue-gray"
              className="flex justify-evenly gap-10 font-medium"
            >
              <img
                src="/logos/logo.png"
                alt="Logo"
                className="w-32 rounded-full"
              />
              <button
                onClick={toggleSidebar}
                className="text-primary focus:outline-none bg-primary/10 p-2 rounded-md hover:bg-primary/20"
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
            </Typography>
          </div>
          {showProfile && (
            <div className="flex flex-col items-center text-center border-b-2 border-gray-200 pb-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center mb-3 shadow-lg">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className=" text-primary mb-1">Britney Hardin</h3>
              <p className="text-sm text-gray-600">Department Admin</p>
            </div>
          )}

          <List className="pl-0">
            {navConfig.map((item, index) => {
              if (item.children) {
                // Parent group
                const isOpen = openGroups[item.group] || false;
                const isChildActive = item.children.some(
                  (child) => location.pathname === child.path
                );

                return (
                  <div key={index}>
                    <ListItem
                      onClick={() => toggleGroup(item.group)}
                      className={`cursor-pointer py-2 flex justify-between items-center ${
                        isChildActive
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      <div className="flex items-center">
                        <ListItemPrefix className="mr-3">
                          <div
                            className={`${
                              location.pathname === item.path
                                ? "bg-primary text-white"
                                : "bg-white"
                            } p-2 rounded-full shadow-lg `}
                          >
                            <item.icon />
                          </div>
                        </ListItemPrefix>

                        {item.title}
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </ListItem>

                    {isOpen && (
                      <div
                        className={`ml-8 overflow-hidden transition-all duration-700 ease-in-out border-l-2 border-primary my-3 ${
                          isOpen
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.children.map((child, childIndex) => (
                          <Link to={child.path} key={childIndex}>
                            <ListItem
                              onClick={handleCLoseDrawerMobile}
                              className={`py-2 m-1 mb-0 ${
                                location.pathname === child.path
                                  ? "bg-primary/10 text-primary"
                                  : "hover:bg-primary/10 hover:text-primary"
                              }`}
                            >
                              {/* <ListItemPrefix className="mr-3">
                          <div className="bg-white p-2 rounded-full shadow-lg">
                            <child.icon />
                          </div>
                        </ListItemPrefix> */}

                              {child.title}
                            </ListItem>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Regular link
              return (
                <Link to={item.path} key={index}>
                  <ListItem
                    onClick={handleCLoseDrawerMobile}
                    className={`py-2 ${
                      location.pathname === item.path
                        ? "bg-primary/10 text-secondary"
                        : "hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    <ListItemPrefix className="mr-3">
                      <div
                        className={`${
                          location.pathname === item.path
                            ? "bg-secondary text-white"
                            : "bg-white"
                        } p-2 rounded-full shadow-lg `}
                      >
                        <item.icon />
                      </div>
                    </ListItemPrefix>
                    {item.title}
                  </ListItem>
                </Link>
              );
            })}
          </List>
        </>
      )}
    </div>
  );
}
