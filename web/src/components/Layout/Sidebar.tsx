import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BarChart3, 
  ShoppingCart, 
  Bitcoin, 
  Cloud, 
  Settings, 
  Moon, 
  Sun,
  X
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { cn } from '../../utils/cn';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const menuItems = [
  { path: '/', icon: BarChart3, label: 'Overview' },
  { path: '/ecommerce', icon: ShoppingCart, label: 'E-commerce' },
  { path: '/crypto', icon: Bitcoin, label: 'Cryptocurrencies' },
  { path: '/weather', icon: Cloud, label: 'Weather' },
  { path: '/settings', icon: Settings, label: 'Settings' },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-xl font-bold text-gradient">
              Metrics Dashboard
            </h1>
            <button
              onClick={onToggle}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => cn(
                      "flex items-center px-4 py-3 rounded-lg transition-colors duration-200",
                      isActive
                        ? "bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    )}
                    onClick={() => window.innerWidth < 1024 && onToggle()}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={toggleTheme}
              className="flex items-center w-full px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 mr-3" />
              ) : (
                <Moon className="w-5 h-5 mr-3" />
              )}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
