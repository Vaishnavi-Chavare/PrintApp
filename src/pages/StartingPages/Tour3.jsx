import React from 'react'
import tou3 from '../../Images/tou3.png'
import t3 from '../../Images/t3.png'
import { useNavigate } from 'react-router-dom'

const Tour3 = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/tour4')
  }
  return (
    <div className='flex flex-row justify-center bg-gray-800 min-h-screen h-fit w-screen px-0'>
        <div className='flex justify-center items-center w-[50%] min-h-fit bg-white'>
          <img className=' w-full h-[347.97px]' src={tou3} />
        </div>
        <div className='flex flex-col w-[50%] bg-indigo-700 min-h-[100%]'>
            <div className='flex flex-col justify-center items-center align-middle mx-10'>
              
              <div className='pt-10 text-3xl md:text-5xl text-white' >
              Smart and Reliable Scanning Solution
              </div>

              <div className='w-full text-white text-2xl pt-10'>
                Trust our advanced document scanner to deliver consistent results, utilizing intelligent technology for dependable performance every time.

                <div className='pt-52 items-center flex justify-between font-mono font-semibold  w-full'>
                  <div>
                    <img src={t3} alt="t3" />
                  </div>
                  <div>
                  <button onClick={handleContinue}  className='rounded-[10px] bg-white leading-auto py-5 px-10  lg:mr-28 text-indigo-700 text-2xl'>Next</button>

                  </div>
                </div>
              </div> 
            </div>
        </div>
    </div>
  )
}

export default Tour3
