import React from 'react'
import tou4 from '../../Images/tou4.png'
import t4 from '../../Images/t4.png'
import { useNavigate } from 'react-router-dom'

const Tour4 = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/Dashboard')
  }
  return (
    <div className='flex flex-row justify-center bg-gray-800 min-h-screen h-fit w-screen px-0'>
        <div className='flex flex-col justify-center items-center w-[50%] min-h-fit bg-indigo-700'>
          <img className='w-[846px] h-[446px] px-5 ' src={tou4} />

          <div className='w-full flex justify-end px-5 pt-10'>
            <img className='pt-5' src={t4} alt="" />
          </div>
        </div>
        <div className='flex flex-col w-[50%] bg-white min-h-[100%]'>
            <div className='flex flex-col justify-center items-center align-middle mx-10'>
              
              <div className='pt-10 text-3xl md:text-5xl text-black' >
              Convenient Printing and Delivery Services              
              </div>

              <div className='w-full text-black text-4xl items-center'>

                <div className='pt-10 text-3xl'>
                Enjoy the ease of having your documents printed and promptly delivered right to your doorstep, ensuring hassle-free access to your materials.
                </div>

                <div className='pt-16 items-center flex justify-between font-mono font-semibold  w-full'>
                  
                  <div className='w-full flex justify-end lg:pt-32'>

                  <button onClick={handleContinue}  className='rounded-[10px] bg-indigo-700 leading-auto py-5 px-10  lg:mr-28 text-white text-2xl'>Next</button>

                  </div>
                </div>
              </div> 
            </div>
        </div>
    </div>
  )
}

export default Tour4
