import React from "react";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 md:pl-64 flex flex-col">
        {/* TopBar */}
        <TopBar />

        {/* Main */}
        <main className="flex-1 w-full p-6">{children}</main> {/* Ensure full width */}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
