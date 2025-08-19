import React from 'react';
import { RefreshCw, TrendingUp, TrendingDown } from 'lucide-react';
import { useCryptoData } from '../hooks/useApi';
import { formatCurrency, formatNumber } from '../utils/shared';

export const Crypto: React.FC = () => {
  const { data: cryptoData, isLoading, error } = useCryptoData();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 animate-spin text-primary-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
                 <p className="text-red-600">Error loading crypto data</p>
      </div>
    );
  }

  if (!cryptoData) return null;

  return (
    <div className="space-y-6">
      <div>
                 <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
           Cryptocurrencies
         </h1>
         <p className="text-gray-600 dark:text-gray-400 mt-2">
           Real-time data for major cryptocurrencies
         </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {cryptoData.map((coin) => (
          <div key={coin.id} className="card">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src={coin.image} 
                  alt={coin.name}
                  className="w-10 h-10 rounded-full"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/40x40?text=' + coin.symbol.toUpperCase();
                  }}
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {coin.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 uppercase">
                    {coin.symbol}
                  </p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-bold text-gray-900 dark:text-gray-100">
                  {formatCurrency(coin.current_price)}
                </p>
                <div className="flex items-center space-x-1">
                  {coin.price_change_percentage_24h > 0 ? (
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-600" />
                  )}
                  <span className={`text-sm font-medium ${
                    coin.price_change_percentage_24h > 0 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </div>
              </div>
              
              <div className="text-right hidden md:block">
                <p className="text-sm text-gray-500 dark:text-gray-400">Market Cap</p>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {formatCurrency(coin.market_cap)}
                </p>
              </div>
              
              <div className="text-right hidden lg:block">
                <p className="text-sm text-gray-500 dark:text-gray-400">Volume 24h</p>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {formatCurrency(coin.total_volume)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
