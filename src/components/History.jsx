import React from "react";

const History = ({historyItems}) => {
  

  return (
    <div className="rounded-lg mx-10 p-4 w-[300px] max-w-sm bg-white shadow-md">
      <h3 className="font-bold text-lg mb-4 text-center pt-10">History</h3>
      <ul className="space-y-4 relative w-full flex justify-center flex-col px-10 pt-5">
        {historyItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 relative"
          >
            {/* Circle to indicate status */}
            <div className="relative">
              <div
                className={`w-4 h-4 rounded-full z-10 ${
                  item.completed ? "bg-green-500" : "bg-gray-400"
                }`}
              ></div>
              {/* Vertical Line */}
              {index !== historyItems.length - 1 && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gray-300"></div>
              )}
            </div>
            {/* Event Details */}
            <div className="flex flex-col">
              <span className="font-medium">{item.event}</span>
              {item.timestamp && (
                <span className="text-sm text-gray-500">{item.timestamp}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
