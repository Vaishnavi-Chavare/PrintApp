import { Link, useLocation } from 'react-router-dom';
import logo from './Logomain.png';

import {
  LayoutDashboard,
  ListOrdered,
  Package,
  Inbox,
  Star,
  Settings,
  LogOut,
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/order-list', icon: ListOrdered, label: 'Order List' },
    { path: '/order-details', icon: Package, label: 'Orders Details' },
    { path: '/inbox', icon: Inbox, label: 'Inbox' },
    { path: '/reviews', icon: Star, label: 'Reviews' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-64 h-screen bg-blue-600 fixed left-0 top-0 flex flex-col text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold">
          <img src={logo} alt="Logo" className="logo w-40 h-auto" /> {/* Adjusted size */}
        </h1>
      </div>

      <nav className="flex-1 relative">
        <ul className="space-y-2 px-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path} className="relative">
                {/* Highlight container */}
                {isActive && (
                  <div className="absolute left-0 top-0 h-full w-full bg-white rounded-lg -z-10"></div>
                )}
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors relative z-10 ${
                    isActive
                      ? 'text-blue-600 bg-white'
                      : 'text-white hover:bg-blue-500'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-blue-500">
        <button className="flex items-center space-x-3 text-white hover:text-red-600 w-full p-3 rounded-lg transition-colors">
          <LogOut size={20} />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
