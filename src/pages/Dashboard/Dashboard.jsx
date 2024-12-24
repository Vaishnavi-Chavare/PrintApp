import React, { useState } from 'react';
import { Package, Truck, XCircle, DollarSign } from 'lucide-react';
import StatsCard from './components/StatsCard';
import PieChartCard from './components/PieChartCard';
import ChartOrderCard from './components/ChartOrderCard';
import OrderListCard from './components/OrderListCard';
import RecentOrderCard from './components/RecentOrderCard';

const Dashboard = () => {
  const [acceptedOrders, setAcceptedOrders] = useState(0); // Track accepted orders
  const [declinedOrders, setDeclinedOrders] = useState(0); // Track declined orders
  const [recentOrderCount, setRecentOrderCount] = useState(10); // Total recent orders
  const maxOrders = 200; // Define the max orders for percentage calculation

  // Calculate total percentage for yellow
  const calculateYellowPercentage = () => (recentOrderCount / maxOrders) * 100;

  // Calculate subdivisions within yellow
  const calculateAcceptedPercentage = () =>
    (acceptedOrders / recentOrderCount) * calculateYellowPercentage();
  const calculateDeclinedPercentage = () =>
    (declinedOrders / recentOrderCount) * calculateYellowPercentage();
  const calculateRemainingYellow = () =>
    calculateYellowPercentage() -
    (calculateAcceptedPercentage() + calculateDeclinedPercentage());

  // Dynamic daily orders data for ChartOrderCard
  const dailyOrders = [120, 150, 200, 170, 220, 250, 280];

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Hello Mamatha, Welcome back to Printable</p>
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
        {/* Left Container: Pie Charts */}
        <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Pie Chart</h2>
          <div className="flex justify-around">
            {/* Total Orders Pie Chart */}
            <PieChartCard
              percentage={calculateYellowPercentage()}
              label="Total Orders"
              data={[
                calculateAcceptedPercentage(), // Green portion (Accepted)
                calculateDeclinedPercentage(), // Red portion (Declined)
                calculateRemainingYellow(), // Remaining yellow
                100 - calculateYellowPercentage(), // Grey portion
              ]}
              colors={['#32CD32', '#FF4500', '#FFD700', '#DDD']} // Green, red, yellow, grey
            />

            {/* Customer Growth Pie Chart */}
            <PieChartCard
              percentage={22}
              label="Customer Growth"
              data={[22, 78]}
              colors={['#51cf66', '#ddd']} // Green and grey
            />

            {/* Total Revenue Pie Chart */}
            <PieChartCard
              percentage={62}
              label="Total Revenue"
              data={[62, 38]}
              colors={['#339af0', '#ddd']} // Blue and grey
            />
          </div>
        </div>

        {/* Right Container: Chart Order */}
        <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
          <ChartOrderCard data={dailyOrders} />
        </div>
      </div>

      {/* Orders Section */}
      <div className="flex mt-8 gap-6">
        {/* Orders List */}
        <div className="w-2/3">
          <OrderListCard />
        </div>

        {/* Recent Orders */}
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
