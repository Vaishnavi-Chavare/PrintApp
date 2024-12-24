import React, { useState } from 'react';

const OrderListCard = () => {
  const [showAll, setShowAll] = useState(false); // State to toggle visibility of additional orders

  const orders = [
    // Original entries
    { id: "#555232", date: "28 Sep 2024, 12:30", location: "Hyderabad, Kukatpally", name: "Kalyan Kumar", amount: "₹2,000", status: "New Order" },
    { id: "#555240", date: "30 Sep 2024, 12:30", location: "Hyderabad, Kukatpally", name: "Ryan Korsgaard", amount: "₹2,000", status: "On Delivery" },
    { id: "#555330", date: "28 Sep 2024, 12:30", location: "Hyderabad, Kukatpally", name: "Zaire Dorwart", amount: "₹2,000", status: "Delivered" },
    { id: "#555530", date: "27 Sep 2024, 12:30", location: "Hyderabad, Kukatpally", name: "Corey Lipshultz", amount: "₹2,000", status: "New Order" },

    // Additional hidden entries
    { id: "#555601", date: "25 Sep 2024, 10:15", location: "Bengaluru, Koramangala", name: "Sophia Lee", amount: "₹3,500", status: "Delivered" },
    { id: "#555602", date: "24 Sep 2024, 14:50", location: "Delhi, South Extension", name: "Aarav Singh", amount: "₹2,800", status: "On Delivery" },
    { id: "#555603", date: "23 Sep 2024, 09:20", location: "Mumbai, Bandra", name: "Olivia Brown", amount: "₹4,000", status: "New Order" },
    { id: "#555604", date: "22 Sep 2024, 16:10", location: "Chennai, Anna Nagar", name: "Noah Wilson", amount: "₹2,700", status: "Delivered" },
    { id: "#555605", date: "21 Sep 2024, 13:00", location: "Kolkata, Park Street", name: "Emma Davis", amount: "₹1,900", status: "On Delivery" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "New Order":
        return "bg-red-100 text-red-600";
      case "On Delivery":
        return "bg-purple-100 text-purple-600";
      case "Delivered":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const visibleOrders = showAll ? orders : orders.slice(0, 4); // Show all or only the first 4 orders

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      {/* Heading */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">Orders List</h2>
        <button
          onClick={() => setShowAll((prev) => !prev)} // Toggle the state
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          {showAll ? "Show Less" : "View All"} {/* Change text dynamically */}
        </button>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Customer Name</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {visibleOrders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="px-4 py-3">{order.id}</td>
                <td className="px-4 py-3">{order.date}</td>
                <td className="px-4 py-3">{order.location}</td>
                <td className="px-4 py-3">{order.name}</td>
                <td className="px-4 py-3">{order.amount}</td>
                <td className="px-4 py-3">
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 rounded ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderListCard;
