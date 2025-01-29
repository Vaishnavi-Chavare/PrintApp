import React from "react";
import { useNavigate } from "react-router-dom";
import success from "../../Images/success.png";
import Success1 from "../../Images/Success1.png";

const Success = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/CreateProfile1");
  };

  return (
    <div className="flex flex-row justify-center bg-gray-100 h-screen w-screen px-0">
      <div className="flex justify-center w-[50%] bg-gray-100 h-screen">
        <img className="" src={success} alt="Success Background" />
      </div>
      <div className="flex flex-col w-[50%] bg-white h-screen">
        <div className="flex flex-col justify-center items-center align-middle">
          <div className="pt-5">
            <img className="w-[100px] md:w-[245px]" src={Success1} alt="Success Icon" />
          </div>
          <div className="pt-5">
            <h1 className="text-gray-700 font-mono text-4xl">Success</h1>
          </div>
          <div className="items-center text-center pt-10">
            <p className="text-gray-400">
              Congratulations! Your mobile number has been successfully verified.
            </p>
          </div>
          <div className="pt-10 font-mono font-semibold">
            <button
              onClick={handleContinue}
              className="rounded-[49px] p-5 px-20 bg-emerald-500 leading-auto text-white text-2xl"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
