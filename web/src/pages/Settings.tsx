import React from 'react';
import { Settings as SettingsIcon, Save } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-6">
      <div>
                 <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
           Settings
         </h1>
         <p className="text-gray-600 dark:text-gray-400 mt-2">
           Configure your application preferences
         </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Appearance Settings */}
        <div className="card">
          <div className="flex items-center space-x-3 mb-6">
            <SettingsIcon className="w-6 h-6 text-primary-600" />
                         <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
               Appearance
             </h2>
          </div>

          <div className="space-y-4">
            <div>
                             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                 Theme
               </label>
              <div className="flex space-x-4">
                <button
                  onClick={() => theme !== 'light' && toggleTheme()}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    theme === 'light'
                      ? 'bg-primary-100 border-primary-500 text-primary-700'
                      : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                                     Light Mode
                 </button>
                 <button
                   onClick={() => theme !== 'dark' && toggleTheme()}
                   className={`px-4 py-2 rounded-lg border transition-colors ${
                     theme === 'dark'
                       ? 'bg-primary-100 border-primary-500 text-primary-700'
                       : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                   }`}
                 >
                   Dark Mode
                 </button>
              </div>
            </div>

            <div>
                             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                 Currency
               </label>
              <select className="input-field">
                <option value="EUR">Euro (€)</option>
                <option value="USD">Dollar US ($)</option>
                <option value="GBP">Livre sterling (£)</option>
              </select>
            </div>

            <div>
                             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                 Language
               </label>
              <select className="input-field">
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications Settings */}
        <div className="card">
          <div className="flex items-center space-x-3 mb-6">
            <SettingsIcon className="w-6 h-6 text-primary-600" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Notifications
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                                 <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                   Email notifications
                 </h3>
                 <p className="text-sm text-gray-500 dark:text-gray-400">
                   Receive reports by email
                 </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                                 <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                   Crypto price alerts
                 </h3>
                 <p className="text-sm text-gray-500 dark:text-gray-400">
                   Price change notifications
                 </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                                 <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                   Weekly reports
                 </h3>
                 <p className="text-sm text-gray-500 dark:text-gray-400">
                   Weekly performance summary
                 </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="btn-primary flex items-center space-x-2">
          <Save className="w-4 h-4" />
                     <span>Save</span>
        </button>
      </div>
    </div>
  );
};
