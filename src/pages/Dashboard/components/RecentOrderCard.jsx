import React, { useState } from 'react';

const RecentOrdersCard = ({ onOrderUpdate }) => {
  const [orderStatus, setOrderStatus] = useState({});

  const recentOrders = [
    { id: 1, name: 'Phillip Schleifer', time: '30 min ago', description: 'Exam Pdf', image: '/path/to/profile1.jpg', date: new Date().toDateString() },
    { id: 2, name: 'Anna Johnson', time: '1 hour ago', description: 'Exam Pdf', image: '/path/to/profile2.jpg', date: new Date().toDateString() },
    { id: 3, name: 'John Doe', time: '2 hours ago', description: 'Exam Pdf', image: '/path/to/profile3.jpg', date: new Date().toDateString() },
    { id: 4, name: 'Emily Carter', time: '3 hours ago', description: 'Exam Pdf', image: '/path/to/profile4.jpg', date: new Date().toDateString() },
    { id: 5, name: 'James Smith', time: '4 hours ago', description: 'Exam Pdf', image: '/path/to/profile5.jpg', date: new Date().toDateString() },
    { id: 6, name: 'Sophia Brown', time: '5 hours ago', description: 'Exam Pdf', image: '/path/to/profile6.jpg', date: new Date().toDateString() },
    { id: 7, name: 'Liam Wilson', time: '6 hours ago', description: 'Exam Pdf', image: '/path/to/profile7.jpg', date: new Date().toDateString() },
    { id: 8, name: 'Olivia Martin', time: '7 hours ago', description: 'Exam Pdf', image: '/path/to/profile8.jpg', date: new Date().toDateString() },
    { id: 9, name: 'Noah Davis', time: '8 hours ago', description: 'Exam Pdf', image: '/path/to/profile9.jpg', date: new Date().toDateString() },
    { id: 10, name: 'Ava Thompson', time: '9 hours ago', description: 'Exam Pdf', image: '/path/to/profile10.jpg', date: new Date().toDateString() },
    // Additional Entries for Today's Date
    { id: 11, name: 'William Brown', time: '10 min ago', description: 'Invoice Pdf', image: '/path/to/profile11.jpg', date: new Date().toDateString() },
    { id: 12, name: 'Lucas Martinez', time: '20 min ago', description: 'Exam Pdf', image: '/path/to/profile12.jpg', date: new Date().toDateString() },
    { id: 13, name: 'Mia Johnson', time: '40 min ago', description: 'Exam Pdf', image: '/path/to/profile13.jpg', date: new Date().toDateString() },
    { id: 14, name: 'Charlotte Garcia', time: '1 hour ago', description: 'Exam Pdf', image: '/path/to/profile14.jpg', date: new Date().toDateString() },
    { id: 15, name: 'Alexander Lee', time: '1 hour 30 min ago', description: 'Report Pdf', image: '/path/to/profile15.jpg', date: new Date().toDateString() },
    { id: 16, name: 'Emma White', time: '2 hours ago', description: 'Exam Pdf', image: '/path/to/profile16.jpg', date: new Date().toDateString() },
    { id: 17, name: 'Benjamin Harris', time: '2 hours 30 min ago', description: 'Exam Pdf', image: '/path/to/profile17.jpg', date: new Date().toDateString() },
    { id: 18, name: 'Isabella Clark', time: '3 hours ago', description: 'Exam Pdf', image: '/path/to/profile18.jpg', date: new Date().toDateString() },
    { id: 19, name: 'Michael Lewis', time: '4 hours ago', description: 'Report Pdf', image: '/path/to/profile19.jpg', date: new Date().toDateString() },
    { id: 20, name: 'Evelyn Young', time: '5 hours ago', description: 'Exam Pdf', image: '/path/to/profile20.jpg', date: new Date().toDateString() },
    // Entries for Yesterday
    { id: 21, name: 'Harper Thomas', time: '6 hours ago', description: 'Exam Pdf', image: '/path/to/profile21.jpg', date: new Date(Date.now() - 86400000).toDateString() },
    { id: 22, name: 'Mason Walker', time: '7 hours ago', description: 'Report Pdf', image: '/path/to/profile22.jpg', date: new Date(Date.now() - 86400000).toDateString() },
  ];

  const filteredOrders = recentOrders.filter(order => order.date === new Date().toDateString());

  const countOrderStatus = () => {
    const accepted = Object.values(orderStatus).filter((status) => status === 'Accepted').length;
    const declined = Object.values(orderStatus).filter((status) => status === 'Canceled').length;
    return { accepted, declined };
  };

  const handleAccept = (id) => {
    setOrderStatus((prevState) => {
      const updatedStatus = { ...prevState, [id]: 'Accepted' };
      const { accepted, declined } = countOrderStatus();
      onOrderUpdate(accepted + 1, declined); // Update the pie chart
      return updatedStatus;
    });
    alert(`Order ${id} Accepted!`);
  };

  const handleCancel = (id) => {
    setOrderStatus((prevState) => {
      const updatedStatus = { ...prevState, [id]: 'Canceled' };
      const { accepted, declined } = countOrderStatus();
      onOrderUpdate(accepted, declined + 1); // Update the pie chart
      return updatedStatus;
    });
    alert(`Order ${id} Canceled!`);
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      {/* Heading */}
      <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Orders</h2>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div key={order.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center space-x-4">
              <img src={order.image} alt={order.name} className="w-12 h-12 rounded-full border" />
              <div>
                <h3 className="text-gray-800 font-medium">{order.name}</h3>
                <p className="text-sm text-gray-500">{order.description}</p>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <p className="text-sm text-gray-500">{order.time}</p>
              {orderStatus[order.id] && (
                <p
                  className={`text-sm ${
                    orderStatus[order.id] === 'Accepted' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {orderStatus[order.id]}
                </p>
              )}
              <div className="flex space-x-2">
                <button
                  onClick={() => handleAccept(order.id)}
                  className="bg-green-500 text-white px-3 py-1 text-sm rounded hover:bg-green-600"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleCancel(order.id)}
                  className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrdersCard;
 