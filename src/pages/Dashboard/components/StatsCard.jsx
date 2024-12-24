const StatsCard = ({
  icon,
  number,
  label,
  growth,
  iconColor = "bg-blue-50", // Default color for the icon background
}) => {
  // Determine the color of the growth text (green for positive, red for negative)
  const growthColor = growth.includes('-') ? 'text-red-500' : 'text-green-500';

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-start space-x-4">
        {/* Icon Section */}
        <div className={`p-3 ${iconColor} rounded-lg`}>
          {icon}
        </div>
        
        {/* Stats Information */}
        <div>
          <p className="text-2xl font-bold text-gray-900">{number}</p>
          <p className="text-sm text-gray-500">{label}</p>
          <p className={`text-sm mt-1 ${growthColor}`}>{growth}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
