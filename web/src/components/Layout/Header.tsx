import React from 'react';
import { Menu, Bell, User } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 lg:px-6">
      <div className="flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Title for mobile */}
        <h1 className="lg:hidden text-lg font-semibold text-gradient">
          Dashboard
        </h1>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {/* User menu */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Admin User
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                admin@example.com
              </p>
            </div>
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
