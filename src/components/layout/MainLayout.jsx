import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { DrawerSidebar } from "./Sidebar";
import Topbar from "./Topbar";

const MainLayout = () => {
  const [open, setOpen] = React.useState(
    window.innerWidth >= 1200 ? true : false
  );
  const DrawerRef = React.useRef(null);


 useEffect(() => {
  const handleClickOutside = (event) => {
    // Only trigger close if screen width is below 1200px
    if (window.innerWidth < 1200 && DrawerRef.current && !DrawerRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []); // No need to watch DrawerRef or window.innerWidth here



  const toggleDrawer = () => setOpen(!open);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <DrawerSidebar open={open} toggleSidebar={toggleDrawer} />

      {/* Main content area */}
      <div className="flex flex-col flex-1 min-w-0">
        <Topbar toggleSidebar={toggleDrawer} open={open}  />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
