import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, ArcElement } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(Tooltip, ArcElement);

const PieChartCard = ({
  percentage,
  label,
  data,
  colors,
  growthPercentage = 0, // Default value to avoid errors
}) => {
  const chartData = {
    datasets: [
      {
        data,
        backgroundColor: colors,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
    cutout: '50%',
  };

  return (
    <div className="flex flex-col items-center mt-3">
      <div className="relative w-28 h-28">
        <Pie data={chartData} options={options} />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Show percentage dynamically */}
          <span className="text-lg font-bold">{(percentage || growthPercentage).toFixed(1)}%</span>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-700">{label}</p>
    </div>
    
  );
};

export default PieChartCard;
