import React from "react";
import user from '../images/user.png';
import calling from '../images/calling.png';
import loc from '../images/loc.png';
import mail from '../images/mail.png';

const UserDetails = () => {
  return (
    <div className="rounded-lg mx-10 items-center w-[300px] justify-between bg-white shadow-md">
      <div className="flex text-center items-center justify-center w-full flex-col">
        <img
          src={user}
          alt="User"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h3 className="text-lg font-bold">Akhilesh Yadav</h3>
      </div>

      <div className="bg-indigo-700 text-white w-full px-0">
        <div className="border-white border-b-2 text-xl px-5 py-3">
          Address
        </div>

        <div className="px-5 py-5 space-y-3 text-xs">
          <div className="flex items-center">
            <img src={loc} alt="" className="w-5 mr-2" />
            <span> : Hyderabad, Kukkatpalli, Main Road, 45</span>
          </div>
          <div className="flex items-center">
            <img src={mail} alt="" className="w-5 mr-2" />
            <span> : Akhileshyadav@gmail.com</span>
          </div>
          <div className="flex items-center">
            <img src={calling} alt="" className="w-4 mr-2" />
            <span> : 9110712XXX</span>
          </div>
          <p>Pincode: 515341</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
