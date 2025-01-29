import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
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

  // State to toggle the visibility of subcontainers for Inbox
  const [isInboxOpen, setIsInboxOpen] = useState(false);

  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/order-list', icon: ListOrdered, label: 'Order List' },
    { path: '/order-details', icon: Package, label: 'Orders Details' },
    {
      label: 'Inbox',
      icon: Inbox,
      subItems: [
        { path: '/inbox/chat', label: 'Chat' },
        { path: '/inbox/mail', label: 'Mail' },
      ],
    },
    { path: '/reviews', icon: Star, label: 'Reviews' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  const handleInboxToggle = () => {
    setIsInboxOpen(!isInboxOpen);
  };

  return (
    <div className="w-64 h-screen bg-blue-600 fixed left-0 top-0 flex flex-col text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold">
          <img src={logo} alt="Logo" className="logo w-40 h-auto" />
        </h1>
      </div>

      <nav className="flex-1 relative">
        <ul className="space-y-2 px-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || location.pathname.startsWith(item.path);

            return (
              <li key={item.label} className="relative">
                {item.subItems ? (
                  <div>
                    {/* Main Inbox button */}
                    <div
                      onClick={handleInboxToggle}
                      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${
                        isActive ? 'bg-white text-blue-600' : 'text-white hover:bg-blue-500'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </div>

                    {/* Subcontainers for Chat and Mail */}
                    {isInboxOpen && (
                      <ul className="pl-6 space-y-2">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.path}>
                            <Link
                              to={subItem.path}
                              className={`block p-2 rounded-lg ${
                                location.pathname === subItem.path
                                  ? 'bg-white text-blue-600'
                                  : 'hover:bg-blue-500'
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      isActive
                        ? 'text-blue-600 bg-white'
                        : 'text-white hover:bg-blue-500'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                )}
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
