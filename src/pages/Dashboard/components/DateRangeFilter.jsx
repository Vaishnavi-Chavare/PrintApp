import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import RecentOrderCard from '../../components/RecentOrderCard'; // Corrected path

const DateRangeFilter = ({ onDateRangeChange }) => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleDateChange = (item) => {
    setDateRange([item.selection]);
    onDateRangeChange(item.selection); // Pass the selected date range to the parent component
  };

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="border rounded-lg bg-gray-100 px-4 py-2 text-gray-700 text-sm shadow-sm flex items-center"
      >
        <span className="font-semibold">Filter Period:</span>{" "}
        {`${dateRange[0].startDate.toLocaleDateString()} - ${dateRange[0].endDate.toLocaleDateString()}`}
      </button>
      <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg p-4 z-10">
        <DateRange
          editableDateInputs={true}
          onChange={handleDateChange}
          moveRangeOnFirstSelection={false}
          ranges={dateRange}
          rangeColors={["#4caf50"]}
        />
      </div>

      {/* Ensure that the RecentOrderCard is being used properly */}
      <RecentOrderCard />
    </div>
  );
};

export default DateRangeFilter;
