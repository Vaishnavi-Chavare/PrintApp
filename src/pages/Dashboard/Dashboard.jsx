import React, { useState } from 'react';
import { Package, Truck, XCircle, DollarSign, ChevronDown } from 'lucide-react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import StatsCard from './components/StatsCard';
import PieChartCard from './components/PieChartCard';
import ChartOrderCard from './components/ChartOrderCard';
import OrderListCard from './components/OrderListCard';
import RecentOrderCard from './components/RecentOrderCard';

const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [acceptedOrders, setAcceptedOrders] = useState(0);
  const [declinedOrders, setDeclinedOrders] = useState(0);
  const [recentOrderCount, setRecentOrderCount] = useState(10); // Total recent orders
  const maxOrders = 200;

  const dailyOrders = [120, 150, 200, 170, 220, 250, 280];

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleDateChange = (item) => {
    setDateRange([item.selection]);
    updateOrderData(item.selection.startDate);
  };

  const updateOrderData = (selectedDate) => {
    // Update data based on selected date
    const selectedDateString = selectedDate.toLocaleDateString();
    if (selectedDateString === new Date().toLocaleDateString()) {
      // Add more dummy data for today
      setRecentOrderCount(20);
      setAcceptedOrders(15); // Example: more accepted orders today
      setDeclinedOrders(5); // Example: some declined orders today
    } else {
      setRecentOrderCount(10);
      setAcceptedOrders(7);
      setDeclinedOrders(3);
    }
  };

  return (
    <div className="p-6 relative">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Hello Mamatha, Welcome back to Printable</p>
        </div>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="border rounded-lg bg-gray-100 px-4 py-2 text-gray-700 text-sm shadow-sm flex items-center"
          >
            <span className="font-semibold">Filter Period:</span>{' '}
            {`${dateRange[0].startDate.toLocaleDateString()} - ${dateRange[0].endDate.toLocaleDateString()}`}
            <ChevronDown className="ml-2 text-gray-600" size={16} />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg p-4 z-10">
              <DateRange
                editableDateInputs={true}
                onChange={handleDateChange}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                rangeColors={['#4caf50']}
              />
            </div>
          )}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          icon={<Package className="text-blue-600" size={24} />}
          number={350}
          label="Total Orders"
          growth="80% (30 days)"
        />
        <StatsCard
          icon={<Truck className="text-green-600" size={24} />}
          number={300}
          label="Total Delivered"
          growth="75% (30 days)"
        />
        <StatsCard
          icon={<XCircle className="text-red-600" size={24} />}
          number={50}
          label="Total Canceled"
          growth="25% (30 days)"
        />
        <StatsCard
          icon={<DollarSign className="text-yellow-600" size={24} />}
          number="₹1 Lakh"
          label="Total Revenue"
          growth="12% (30 days)"
        />
      </div>

      {/* Pie Chart Section */}
      <div className="flex mt-8 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Pie Chart</h2>
          <div className="flex justify-around">
            {/* Total Orders Pie Chart */}
            <PieChartCard
              percentage={(recentOrderCount / maxOrders) * 100}
              label="Total Orders"
              data={[
                (acceptedOrders / recentOrderCount) * 100, // Green: Accepted Orders
                (declinedOrders / recentOrderCount) * 100, // Red: Declined Orders
                (recentOrderCount / maxOrders) * 100 - // Yellow: Total Orders
                  ((acceptedOrders / recentOrderCount) * 100 + (declinedOrders / recentOrderCount) * 100),
                100 - (recentOrderCount / maxOrders) * 100, // Remaining Grey
              ]}
              colors={['#32CD32', '#FF4500', '#FFD700', '#DDD']} // Green, Red, Yellow, Grey
            />

            {/* Customer Growth Pie Chart */}
            <PieChartCard
              percentage={(acceptedOrders / recentOrderCount) * 100}
              label="Customer Growth"
              data={[22, 78]}
              colors={['#51cf66', '#ddd']}
            />

            {/* Total Revenue Pie Chart */}
            <PieChartCard
              percentage={62}
              label="Total Revenue"
              data={[62, 38]}
              colors={['#339af0', '#ddd']}
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
          <ChartOrderCard data={dailyOrders} />
        </div>
      </div>

      {/* Orders Section */}
      <div className="flex mt-8 gap-6">
        <div className="w-2/3">
          <OrderListCard />
        </div>

        <div className="w-1/3">
          <RecentOrderCard
            onOrderUpdate={(accepted, declined) => {
              setAcceptedOrders(accepted);
              setDeclinedOrders(declined);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
