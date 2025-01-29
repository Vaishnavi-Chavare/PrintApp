import React from 'react';
import welcome from '../../Images/welcome.png'; // Correct path for welcome image
import t1 from '../../Images/t1.png'; // Correct path for t1 image
import { useNavigate } from 'react-router-dom';

const Tour1 = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/tour2'); // Navigate to the next page
  };

  return (
    <div className='flex flex-row justify-center bg-gray-800 min-h-screen h-fit w-screen px-0'>
      {/* Left Section with Image */}
      <div className='flex justify-center items-center w-[50%] min-h-fit bg-white'>
        <img className='w-full h-[347.97px]' src={welcome} alt="Welcome" />
      </div>

      {/* Right Section with Text and Button */}
      <div className='flex flex-col w-[50%] bg-indigo-700 min-h-[100%]'>
        <div className='flex flex-col justify-start items-center align-middle mx-10 mt-16'> {/* Added `mt-16` for spacing */}
          {/* Main Title */}
          <div className='pt-10 text-3xl md:text-5xl text-white'>
            Welcome to our Document Scanner!
          </div>

          {/* Description Text */}
          <div className='w-full text-white text-2xl pt-10'>
            Digitize your paperwork effortlessly with our cutting-edge document scanner.

            {/* Bottom Section with Image and Button */}
            <div className='pt-60 items-center flex justify-between font-mono font-semibold w-full'>
              <div>
                <img src={t1} alt="Tour Image" />
              </div>
              <div>
                <button
                  onClick={handleContinue}
                  className='rounded-[10px] bg-white leading-auto py-5 px-10 lg:mr-28 text-indigo-700 text-2xl'
                >
                  Next
                </button>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Tour1;
