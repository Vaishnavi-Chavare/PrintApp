import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    shopName: "",
    address: "",
    state: "",
    city: "",
    area: "",
    description: "",
  });

  // Function to calculate profile completion
  const calculateCompletion = () => {
    const totalFields = Object.keys(formData).length;
    const filledFields = Object.values(formData).filter(
      (value) => value.trim() !== ""
    ).length;
    return Math.round((filledFields / totalFields) * 100);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      shopName: "",
      address: "",
      state: "",
      city: "",
      area: "",
      description: "",
    });
  };

  const profileCompletion = calculateCompletion();

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
      <aside
        className="w-64 bg-white hidden md:flex flex-col"
        style={{
          width: "250px", // Sidebar width adjusted to 250px
          minWidth: "250px",
        }}
      >
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
      <div
        className="flex-1"
        style={{
          padding: "20px", // Adds padding around content
          overflowX: "hidden", // Prevent overflow in content area
        }}
      >
        {/* Settings Heading */}
        <div className="p-6 bg-white border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
          <p className="text-sm text-gray-600 mt-1">
            Manage your account settings and set preferences.
          </p>
        </div>

        {/* Profile Section */}
        <div className="relative mt-4">
          <div className="relative w-full h-48 bg-gray-200">
            <img
              src="/path-to-your-cover-image.jpg"
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12">
            <img
              src="/path-to-your-profile-picture.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white"
            />
          </div>
        </div>

        {/* Profile Completion Bar */}
        <div className="mt-16 px-6">
          <div className="bg-gray-200 rounded-full h-2 w-full mb-6">
            <div
              className="bg-green-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${profileCompletion}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Profile Completion:{" "}
            <span className="font-semibold">{profileCompletion}%</span>
          </p>

          {/* Form */}
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Profile Updated Successfully!");
            }}
          >
            {/* Basic Details */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  label: "Your Name",
                  name: "name",
                  type: "text",
                  placeholder: "Enter your name",
                },
                {
                  label: "Phone Number",
                  name: "phoneNumber",
                  type: "text",
                  placeholder: "Enter phone number",
                },
                {
                  label: "Email",
                  name: "email",
                  type: "email",
                  placeholder: "Enter your email",
                },
                {
                  label: "Shop Name",
                  name: "shopName",
                  type: "text",
                  placeholder: "Enter shop name",
                },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name} className="space-y-2">
                  <label htmlFor={name} className="block text-gray-600">
                    {label}
                  </label>
                  <input
                    id={name}
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    className="w-full py-2 px-4 border border-gray-300 rounded-md"
                    aria-label={label}
                    required
                  />
                </div>
              ))}
            </div>

            {/* Address */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Address", name: "address", placeholder: "Enter shop address" },
                { label: "State", name: "state", placeholder: "Enter state" },
                { label: "City", name: "city", placeholder: "Enter city" },
                { label: "Area", name: "area", placeholder: "Enter area" },
              ].map(({ label, name, placeholder }) => (
                <div key={name} className="space-y-2">
                  <label htmlFor={name} className="block text-gray-600">
                    {label}
                  </label>
                  <input
                    id={name}
                    type="text"
                    name={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    className="w-full py-2 px-4 border border-gray-300 rounded-md"
                    aria-label={label}
                    required
                  />
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter description"
                className="w-full py-2 px-4 border border-gray-300 rounded-md"
                aria-label="Description"
                required
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="py-2 px-4 bg-gray-200 rounded-md"
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
