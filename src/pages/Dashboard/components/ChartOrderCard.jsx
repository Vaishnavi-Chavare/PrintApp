import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler
);

const ChartOrderCard = ({ data }) => {
  const chartData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Orders',
        data,
        borderColor: '#339af0',
        borderWidth: 2,
        tension: 0.4,
        fill: 'start',
        pointRadius: 4,
        pointBackgroundColor: '#339af0',
        pointBorderWidth: 1,
        backgroundColor: 'rgba(51, 154, 240, 0.2)', // Gradient fill (light blue)
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw} Orders`,
          title: (tooltipItems) => `${tooltipItems[0].label}`,
        },
      },
    },
    scales: {
      x: { ticks: { color: '#000' } },
      y: { ticks: { color: '#000' }, beginAtZero: true },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg w-full max-w-full overflow-hidden flex flex-col relative">
      <h2 className="text-lg font-bold text-gray-800 mb-2">Chart Order</h2>
      <div className="w-full h-48">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ChartOrderCard;
