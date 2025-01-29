import { Search, Bell, MessageCircle } from 'lucide-react'; // Use MessageCircle for chat/message icon


const TopBar = () => {
  return (
    <div className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
      {/* Search Input */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex items-center space-x-6">
        {/* Notification Icons */}
        <div className="flex space-x-4">
          {/* Message Icon */}
          <button className="relative flex items-center justify-center w-10 h-10 bg-blue-50 rounded-xl shadow-md">
            <MessageCircle className="text-blue-600" size={22} />
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              65
            </span>
          </button>

          {/* Bell Icon */}
          <button className="relative flex items-center justify-center w-10 h-10 bg-blue-50 rounded-xl shadow-md">
            <Bell className="text-blue-600" size={22} />
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              21
            </span>
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="text-sm font-medium">Hello, Mamatha</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
