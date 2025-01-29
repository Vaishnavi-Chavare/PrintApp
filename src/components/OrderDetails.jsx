import React from 'react'
import AcceptButtonWithDropdown from './AcceptButtonWithDropdown'

const OrderDetails = ({name}) => {
  return (
    <div className="flex mx-10 mt-10 justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Order ID #555232</h1>
          <p className="text-indigo-700">Order Details</p>
        </div>
        <div className="w-6/12 flex justify-evenly">
        <button className="border border-red-600 text-black px-10  rounded-lg">Cancel Order</button>
          <AcceptButtonWithDropdown name={name} />
        </div>
      </div>
  )
}

export default OrderDetails