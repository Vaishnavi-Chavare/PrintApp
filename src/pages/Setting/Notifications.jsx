import React from "react";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex"
      style={{
        width: "80vw", // Full page width
        height: "100vh", // Full page height
        overflow: "hidden", // Prevent overflow
      }}
    >
      {/* Sidebar */}
      <aside className="w-64 bg-white hidden md:flex flex-col">
        <nav className="p-6 space-y-4">
          <button
            onClick={() => navigate("/settings/profile")}
            className="block w-full py-2 px-4 text-left text-gray-600 hover:bg-gray-100 rounded-md"
          >
            My Profile
          </button>
          <button
            onClick={() => navigate("/settings/password")}
            className="block w-full py-2 px-4 text-left text-gray-600 hover:bg-gray-100 rounded-md"
          >
            Password
          </button>
          <button
            onClick={() => navigate("/settings/notifications")}
            className="block w-full py-2 px-4 text-left text-gray-600 hover:bg-gray-100 rounded-md"
          >
            Notifications
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Notification Settings</h1>
        <p className="text-gray-600 mb-6">
          Manage your notification preferences below.
        </p>
        <form className="space-y-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="emailNotifications"
              className="mr-2"
            />
            <label htmlFor="emailNotifications" className="text-gray-600">
              Email Notifications
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="smsNotifications"
              className="mr-2"
            />
            <label htmlFor="smsNotifications" className="text-gray-600">
              SMS Notifications
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="pushNotifications"
              className="mr-2"
            />
            <label htmlFor="pushNotifications" className="text-gray-600">
              Push Notifications
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save Preferences
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Notifications;
