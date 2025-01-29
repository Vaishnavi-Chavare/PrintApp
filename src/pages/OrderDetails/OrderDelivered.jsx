import React from "react";
import { FiXCircle } from "react-icons/fi"; // Import red cross icon

const OrderDelivered = () => {
  const historyItems = [
    { event: "Order Delivered", timestamp: "2024-11-17", completed: false, path: "/order-delivered" },
    { event: "On Delivery", timestamp: "2024-11-16", completed: false, path: "/on-delivery" },
    { event: "Payment Success", timestamp: "2024-11-15", completed: false, path: "/payment-success" },
    { event: "Order Created", timestamp: "2024-11-14", completed: false, path: "/order-created" },
    { event: "Accepted", timestamp: "2024-11-13", completed: true, path: "/" },
  ];

  const tableData = [
    { sno: 1, fileName: "Sem Presentation", pages: 500, qty: 2, price: "₹1000", totalPrice: "₹2000" },
    { sno: 2, fileName: "Mid Exam", pages: 300, qty: 1, price: "₹10", totalPrice: "₹80" },
    { sno: 3, fileName: "NMAT", pages: 400, qty: 3, price: "₹7", totalPrice: "₹315" },
    { sno: 4, fileName: "Java", pages: 500, qty: 3, price: "₹7", totalPrice: "₹315" },
    { sno: 5, fileName: "Python", pages: 600, qty: 3, price: "₹7", totalPrice: "₹315" },
  ];

  return (
    <div className="space-y-6">
      {/* Heading Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Order Details</h1>
          <p className="text-gray-500">Dashboard / Order Details</p>
        </div>
        {/* Accept/Reject Buttons */}
        <div className="flex space-x-4">
          <button className="py-2 px-4 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600">
            Accept Order
          </button>
          <button className="py-2 px-4 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600">
            Reject Order
          </button>
        </div>
      </div>

      {/* Main Section with Left and Right Section */}
      <div className="flex space-x-4">
        {/* Left Section */}
        <div className="w-1/4 space-y-6">
          {/* Blue Box Section */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover mb-3 mx-auto"
            />
            <h2 className="text-center text-sm font-bold text-blue-700">John Doe</h2>
            <p className="text-xs text-gray-600 mt-2">
              <span className="font-semibold">Address:</span> 123 Street, City
            </p>
            <p className="text-xs text-gray-600 mt-1">
              <span className="font-semibold">Email:</span> john.doe@example.com
            </p>
            <p className="text-xs text-gray-600 mt-1">
              <span className="font-semibold">Phone:</span> +91 98765 43210
            </p>
            <p className="text-xs text-gray-600 mt-1">
              <span className="font-semibold">Pincode:</span> 560001
            </p>
          </div>

          {/* History Section */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-900">Order History</h2>
            <ul className="mt-4 space-y-6 relative">
              {historyItems.map((item, index) => (
                <li key={index} className="flex items-start space-x-4 relative">
                  {/* Circle */}
                  <div className="relative">
                    <div
                      className={`w-4 h-4 rounded-full z-10 ${
                        item.completed ? "bg-green-500" : "bg-gray-400"
                      }`}
                    ></div>
                    {/* Line */}
                    {index !== historyItems.length - 1 && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gray-300"></div>
                    )}
                  </div>
                  {/* Event Details */}
                  <div className="text-sm">
                    <span className="font-medium">{item.event}</span>
                    <p className="text-xs text-gray-500">{item.timestamp}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h2>
          {/* Table with Blue Header Bar */}
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="text-sm text-white bg-blue-500">
                <th className="px-4 py-2">SNO</th>
                <th className="px-4 py-2">File Name</th>
                <th className="px-4 py-2">Pages</th>
                <th className="px-4 py-2">Qty</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Total Price</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr
                  key={index}
                  className={`text-sm text-gray-700 ${
                    index % 2 === 0 ? "bg-gray-50" : ""
                  }`}
                >
                  <td className="px-4 py-2">{item.sno}</td>
                  <td className="px-4 py-2">{item.fileName}</td>
                  <td className="px-4 py-2">{item.pages}</td>
                  <td className="px-4 py-2">{item.qty}</td>
                  <td className="px-4 py-2">{item.price}</td>
                  <td className="px-4 py-2">{item.totalPrice}</td>
                  <td className="px-4 py-2 text-red-500">
                    <FiXCircle className="inline-block cursor-pointer hover:text-red-700" size={18} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDelivered;
