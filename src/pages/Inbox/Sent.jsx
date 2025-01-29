import React from "react";
import SidebarInbox from "../../components/SidebarInbox";

const Sent = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar Section */}
      <SidebarInbox />

      {/* Main Content Section */}
      <div className="flex flex-col flex-grow p-4">
        {/* Search Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b">
          <input
            type="text"
            placeholder="Search mail"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex space-x-2">
            <button title="Refresh" className="p-2 rounded hover:bg-gray-100">
              🔄
            </button>
            <button title="More Options" className="p-2 rounded hover:bg-gray-100">
              ⋮
            </button>
          </div>
        </div>

        {/* Sent Mails List */}
        <div className="overflow-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="text-left text-gray-600">
                <th className="p-2">Star</th>
                <th className="p-2">Receiver</th>
                <th className="p-2">Message</th>
                <th className="p-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(3)].map((_, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="p-2 text-center">
                    <button className="text-gray-500 hover:text-yellow-500">☆</button>
                  </td>
                  <td className="p-2 font-medium">Receiver {index + 1}</td>
                  <td className="p-2 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </td>
                  <td className="p-2 text-gray-400 text-sm">01:16 PM</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sent;
