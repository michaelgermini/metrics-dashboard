import React from 'react';
import { 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  DollarSign,
  RefreshCw,
  Filter
} from 'lucide-react';
import { MetricCard } from '../components/Dashboard/MetricCard';
import { RevenueChart } from '../components/Dashboard/RevenueChart';
import { useEcommerceData } from '../hooks/useApi';
import { formatCurrency, formatNumber, formatPercentage } from '../utils/shared';

export const Ecommerce: React.FC = () => {
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
      title: 'Average Order Value',
      value: formatCurrency(ecommerceData.average_order_value),
      change: 5.7,
      icon: TrendingUp,
      trend: 'up' as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
                   <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
           E-commerce
         </h1>
         <p className="text-gray-600 dark:text-gray-400 mt-2">
           Detailed e-commerce performance analysis
         </p>
        </div>
                 <button className="btn-secondary flex items-center space-x-2">
           <Filter className="w-4 h-4" />
           <span>Filters</span>
         </button>
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

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart data={ecommerceData.revenue_trend} />
        
                 <div className="card">
           <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
             Conversion Rate
           </h3>
           <div className="flex items-center justify-center h-64">
             <div className="text-center">
               <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                 {formatPercentage(ecommerceData.conversion_rate)}
               </div>
               <p className="text-gray-600 dark:text-gray-400 mt-2">
                 Overall conversion rate
               </p>
             </div>
           </div>
         </div>
      </div>

      {/* Detailed Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 <div className="card">
           <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
             Top Products
           </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                                     <th className="text-left py-3 px-2 font-medium text-gray-900 dark:text-gray-100">
                     Product
                   </th>
                   <th className="text-right py-3 px-2 font-medium text-gray-900 dark:text-gray-100">
                     Sales
                   </th>
                   <th className="text-right py-3 px-2 font-medium text-gray-900 dark:text-gray-100">
                     Revenue
                   </th>
                </tr>
              </thead>
              <tbody>
                {ecommerceData.top_products.map((product) => (
                  <tr key={product.id} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-2">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">
                          {product.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {product.category}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-right text-gray-900 dark:text-gray-100">
                      {formatNumber(product.sales)}
                    </td>
                    <td className="py-3 px-2 text-right font-medium text-gray-900 dark:text-gray-100">
                      {formatCurrency(product.revenue)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

                 <div className="card">
           <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
             Performance by Category
           </h3>
          <div className="space-y-4">
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
                     {category.percentage.toFixed(1)}% of total
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
