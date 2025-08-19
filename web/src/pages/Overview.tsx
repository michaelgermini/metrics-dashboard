import React from 'react';
import { 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  DollarSign,
  RefreshCw
} from 'lucide-react';
import { MetricCard } from '../components/Dashboard/MetricCard';
import { useEcommerceData } from '../hooks/useApi';
import { formatCurrency, formatNumber, formatPercentage } from '../utils/shared';

export const Overview: React.FC = () => {
  const { data: ecommerceData, isLoading, error } = useEcommerceData();

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
                 <p className="text-red-600">Error loading data</p>
      </div>
    );
  }

  if (!ecommerceData) return null;

  const metrics = [
    {
      title: 'Total Revenue',
      value: formatCurrency(ecommerceData.revenue),
      change: 12.5,
      icon: DollarSign,
      trend: 'up' as const,
    },
    {
      title: 'Orders',
      value: formatNumber(ecommerceData.orders),
      change: 8.2,
      icon: ShoppingCart,
      trend: 'up' as const,
    },
    {
      title: 'Active Customers',
      value: formatNumber(ecommerceData.customers),
      change: 15.3,
      icon: Users,
      trend: 'up' as const,
    },
    {
      title: 'Conversion Rate',
      value: formatPercentage(ecommerceData.conversion_rate),
      change: -2.1,
      icon: TrendingUp,
      trend: 'down' as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Overview
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Key business metrics overview
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            icon={metric.icon}
            trend={metric.trend}
          />
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Top Selling Products
          </h3>
          <div className="space-y-3">
            {ecommerceData.top_products.slice(0, 5).map((product, index) => (
              <div key={product.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {product.category}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {formatCurrency(product.revenue)}
                  </p>
                                     <p className="text-sm text-gray-500 dark:text-gray-400">
                     {product.sales} sales
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Sales by Category
          </h3>
          <div className="space-y-3">
            {ecommerceData.sales_by_category.map((category, index) => (
              <div key={category.category} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: `hsl(${index * 60}, 70%, 50%)` }}
                  />
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {category.category}
                  </span>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {formatCurrency(category.sales)}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {category.percentage.toFixed(1)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
