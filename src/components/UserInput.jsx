import React from 'react';
import { FaUser } from 'react-icons/fa';

const UserInput = ({title,desc}) => {
  return (
    <div className="relative w-full max-w-md mx-auto mt-10">
      {/* Label */}
      <label className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-700">{title}</label>

      {/* Input Field with Icon */}
      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
        {/* Icon */}
        <FaUser className="text-gray-500 mr-3" />

        {/* Input */}
        <input
          type="text"
          placeholder={desc}
          className="w-full bg-transparent focus:outline-none"
        />
      </div>
    </div>
  );
};

export default UserInput;
