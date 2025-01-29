import React from "react";
import up1 from "../../Images/up1.png";
import UserInput from "../../components/UserInput";
import { useNavigate } from "react-router-dom";

const CreateProfile1 = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/Tour1");
  };
  
  return (
    <div className="flex flex-row justify-center bg-white min-h-screen w-screen">
      
      <div className="flex justify-center items-center w-[45%] bg-white">
        <img
          className="h-[90%] w-auto object-contain"
          src={up1}
          alt="Profile Illustration"
        />
      </div>

      {/* Right Section with Form */}
      <div className="flex flex-col justify-center items-center w-[55%] bg-white px-6">
        {/* Profile Picture Placeholder */}
        <div className="w-[200px] h-[200px] rounded-full bg-gray-300 mb-6"></div>

        {/* User Input Fields */}
        <div className="w-full">
          <UserInput title={""} desc={"First Name"} />
          <UserInput title={""} desc={"Your E-Mail"} />
          <UserInput title={""} desc={"Your Location"} />
          <UserInput title={""} desc={"Pincode"} />

          {/* Submit Button */}
          <div className="pt-8 flex justify-end w-full">
            <button
              onClick={handleContinue}
              className="rounded-[10px] bg-indigo-700 py-2 px-6 text-white text-lg font-semibold"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile1;
