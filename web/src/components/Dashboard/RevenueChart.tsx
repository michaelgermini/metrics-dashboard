import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';
import { formatCurrency, formatDate, RevenuePoint } from '../../utils/shared';

interface RevenueChartProps {
  data: RevenuePoint[];
  className?: string;
}

export const RevenueChart: React.FC<RevenueChartProps> = ({ data, className }) => {
  const formatTooltipValue = (value: number) => formatCurrency(value);
  const formatTooltipLabel = (label: string) => formatDate(label);
  const formatYAxisTick = (value: number) => formatCurrency(value);

  return (
    <div className={`card ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Revenue Evolution
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="date"
            tickFormatter={(value: any) => formatDate(value)}
            stroke="#6B7280"
            fontSize={12}
          />
          <YAxis
            tickFormatter={(value: any) => formatYAxisTick(value)}
            stroke="#6B7280"
            fontSize={12}
          />
          <Tooltip
            formatter={(value: number) => [formatTooltipValue(value), 'Revenue']}
            labelFormatter={formatTooltipLabel}
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#3B82F6"
            strokeWidth={2}
            fill="url(#revenueGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
