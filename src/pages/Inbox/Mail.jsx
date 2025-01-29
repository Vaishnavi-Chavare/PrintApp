import React from "react";
import SidebarInbox from "../../components/SidebarInbox";

const Mail = () => {
  return (
    <div
      className="flex"
      style={{
        width: "80vw", // Full page width
        height: "100vh", // Full page height
        overflow: "hidden", // Prevent overflow
      }}
    >
      {/* Sidebar Section with reduced width */}
      <SidebarInbox
        style={{
          width: "250px", // Adjust sidebar width to be a bit smaller
          minWidth: "250px", // Ensures the sidebar stays at least 250px
          backgroundColor: "#f0f0f0", // Optional: Background color for the sidebar
        }}
      />

      {/* Main Content Section */}
      <div
        className="flex flex-col flex-grow"
        style={{
          padding: "20px", // Adds padding around content
          overflowX: "hidden", // Prevent overflow in content area
        }}
      >
        {/* Search Bar */}
        <div className="flex items-center border-b pb-4 mb-4">
          <input
            type="text"
            placeholder="Search mail"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Mail List Table */}
        <div className="overflow-auto w-full">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="text-left text-gray-600">
                <th className="p-2">Star</th>
                <th className="p-2">Sender</th>
                <th className="p-2">Message</th>
                <th className="p-2">Time</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((_, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="p-2 text-center">
                    <span className="text-yellow-500">★</span>
                  </td>
                  <td className="p-2 font-medium">Sender {index + 1}</td>
                  <td className="p-2 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </td>
                  <td className="p-2 text-gray-400 text-sm">01:16 PM</td>
                  <td className="p-2 flex space-x-2">
                    <button
                      title="Delete"
                      className="text-gray-500 hover:text-red-500"
                    >
                      🗑️
                    </button>
                    <button
                      title="Open"
                      className="text-gray-500 hover:text-blue-500"
                    >
                      ✉️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mail;
