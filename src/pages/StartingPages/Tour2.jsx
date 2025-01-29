import React from 'react';
import { useNavigate } from 'react-router-dom';
import tou2 from '../../Images/tou2.png'; // Correct path for tou2 image
import t2 from '../../Images/t2.png'; // Correct path for t2 image

const Tour2 = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/tour3'); // Navigate to the next page
  };

  return (
    <div className='flex flex-row justify-center bg-gray-800 min-h-screen h-fit w-screen px-0'>
      {/* Left Section */}
      <div className='flex flex-col justify-center items-center w-[50%] min-h-fit bg-indigo-700'>
        {/* Main Image */}
        <img className='w-full h-[347.97px] px-5' src={tou2} alt="Tour Image 2" />

        {/* Bottom Right Image */}
        <div className='w-full flex justify-end px-5 pt-20'>
          <img src={t2} alt="Illustration" />
        </div>
      </div>

      {/* Right Section */}
      <div className='flex flex-col w-[50%] bg-white min-h-[100%]'>
        {/* Main Content */}
        <div className='flex flex-col justify-start items-center align-middle mx-10 mt-16'>
          {/* Title */}
          <div className='pt-10 w-full text-3xl md:text-5xl text-black'>
            Effortless Scanning
          </div>

          {/* Description */}
          <div className='w-full text-black text-3xl pt-10'>
            Simplify your document management with our intuitive scanner, ensuring seamless digitization of your paperwork with just a few clicks.
          </div>

          {/* Button Section */}
          <div className='pt-60 items-center flex justify-end font-mono font-semibold w-full'>
            <button
              onClick={handleContinue}
              className='rounded-[10px] bg-indigo-700 leading-auto py-5 px-10 lg:mr-28 text-white text-2xl'
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour2;
