import React, { useState } from 'react';
import { RefreshCw, Search, Cloud, Thermometer, Droplets, Wind } from 'lucide-react';
import { useWeatherData } from '../hooks/useApi';

export const Weather: React.FC = () => {
  const [city, setCity] = useState('Paris');
  const { data: weatherData, isLoading, error } = useWeatherData(city);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newCity = formData.get('city') as string;
    if (newCity.trim()) {
      setCity(newCity.trim());
    }
  };

  return (
    <div className="space-y-6">
      <div>
                 <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
           Weather
         </h1>
         <p className="text-gray-600 dark:text-gray-400 mt-2">
           Real-time weather conditions
         </p>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex gap-2">
                 <input
           type="text"
           name="city"
           placeholder="Enter a city..."
           defaultValue={city}
           className="input-field flex-1"
         />
         <button type="submit" className="btn-primary flex items-center space-x-2">
           <Search className="w-4 h-4" />
           <span>Search</span>
         </button>
      </form>

      {/* Weather Display */}
      {isLoading && (
        <div className="flex items-center justify-center h-64">
          <RefreshCw className="w-8 h-8 animate-spin text-primary-600" />
        </div>
      )}

      {error && (
        <div className="text-center py-8">
          <p className="text-red-600">Error loading weather data</p>
        </div>
      )}

      {weatherData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Weather Card */}
          <div className="card md:col-span-2 lg:col-span-1">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {weatherData.location}
              </h2>
              <div className="text-6xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                {Math.round(weatherData.temperature)}°C
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                {weatherData.condition}
              </p>
              <div className="w-24 h-24 mx-auto bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <Cloud className="w-12 h-12 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Details Cards */}
          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <Thermometer className="w-6 h-6 text-red-500" />
                             <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                 Temperature
               </h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {Math.round(weatherData.temperature)}°C
            </p>
          </div>

          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <Droplets className="w-6 h-6 text-blue-500" />
                             <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                 Humidity
               </h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {weatherData.humidity}%
            </p>
          </div>

          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <Wind className="w-6 h-6 text-green-500" />
                             <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                 Wind
               </h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {weatherData.wind_speed} km/h
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
