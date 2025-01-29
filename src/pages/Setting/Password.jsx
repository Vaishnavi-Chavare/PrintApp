import React from "react";
import { useNavigate } from "react-router-dom";

const Password = () => {
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
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Password Settings</h1>
        <p className="text-gray-600">
          Here you can change your password. Make sure to choose a strong and secure password.
        </p>
        <form className="space-y-6 mt-6">
          <div className="space-y-2">
            <label htmlFor="currentPassword" className="block text-gray-600">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              placeholder="Enter current password"
              className="w-full py-2 px-4 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="newPassword" className="block text-gray-600">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              placeholder="Enter new password"
              className="w-full py-2 px-4 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm new password"
              className="w-full py-2 px-4 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Password;
