import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronDown, Link as LinkIcon, Calendar } from 'lucide-react';

const StatusFilter = () => {
  const [searchParams] = useSearchParams();
  const currentStatus = searchParams.get('status') || 'all';

  const [isOpen, setIsOpen] = useState(false); // State to track dropdown open/close

  const statuses = [
    { value: 'all', label: 'All Status' },
    { value: 'new', label: 'New Order' },
    { value: 'delivery', label: 'On Delivery' },
    { value: 'delivered', label: 'Delivered' },
    { value: 'delivered-today', label: 'Delivered Today' },
  ];

  const getCurrentStatusLabel = () => {
    return statuses.find((s) => s.value === currentStatus)?.label || 'All Status';
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown
  };

  return (
    <div className="flex gap-4">
      {/* Status Filter Dropdown */}
      <div className="relative">
        <button
          onClick={toggleDropdown} // Toggle dropdown on click
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border hover:border-blue-500"
        >
          <LinkIcon size={16} />
          <span>{getCurrentStatusLabel()}</span>
          <ChevronDown size={16} />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border z-10">
            <div className="py-1">
              {statuses.map((status) => (
                <Link
                  key={status.value}
                  to={status.value === 'all' ? '/order-list' : `/order-list?status=${status.value}`}
                  className={`block px-4 py-2 hover:bg-gray-100 ${
                    currentStatus === status.value ? 'bg-blue-50 text-blue-600' : ''
                  }`}
                  onClick={() => setIsOpen(false)} // Close dropdown when a status is selected
                >
                  {status.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Date Filter Dropdown (Unchanged) */}
      <div className="relative group">
        <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border hover:border-blue-500">
          <Calendar size={16} />
          <span>Last Week</span>
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default StatusFilter;
