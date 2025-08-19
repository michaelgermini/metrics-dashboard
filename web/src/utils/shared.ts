import { format, subDays } from 'date-fns';
import { fr, enUS } from 'date-fns/locale';

// Types
export interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  image: string;
}

export interface EcommerceData {
  revenue: number;
  orders: number;
  customers: number;
  conversion_rate: number;
  average_order_value: number;
  top_products: Product[];
  sales_by_category: CategorySales[];
  revenue_trend: RevenuePoint[];
}

export interface Product {
  id: string;
  name: string;
  sales: number;
  revenue: number;
  category: string;
}

export interface CategorySales {
  category: string;
  sales: number;
  percentage: number;
}

export interface RevenuePoint {
  date: string;
  revenue: number;
  orders: number;
}

export interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  wind_speed: number;
  icon: string;
}

export interface DashboardMetrics {
  total_revenue: number;
  total_orders: number;
  active_customers: number;
  conversion_rate: number;
  average_order_value: number;
  growth_rate: number;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    fill?: boolean;
  }[];
}

export type Theme = 'light' | 'dark';

export interface AppConfig {
  theme: Theme;
  currency: string;
  language: string;
}

// Utility functions
export const formatCurrency = (amount: number, currency = 'EUR'): string => {
  // Ensure currency is a valid string
  const currencyCode = typeof currency === 'string' ? currency : 'EUR';
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(amount);
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num);
};

export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

export const formatDate = (date: string | Date, locale = 'en'): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const localeObj = locale === 'en' ? enUS : fr;
  return format(dateObj, 'MMM dd, yyyy', { locale: localeObj });
};

export const generateMockEcommerceData = (): EcommerceData => {
  const today = new Date();
  const revenueTrend = Array.from({ length: 30 }, (_, i) => {
    const date = subDays(today, 29 - i);
    const baseRevenue = 50000 + Math.random() * 20000;
    return {
      date: format(date, 'yyyy-MM-dd'),
      revenue: baseRevenue,
      orders: Math.floor(baseRevenue / (100 + Math.random() * 50)),
    };
  });

  return {
    revenue: 1250000,
    orders: 8500,
    customers: 4200,
    conversion_rate: 3.2,
    average_order_value: 147,
    top_products: [
      { id: '1', name: 'Smartphone Pro', sales: 450, revenue: 67500, category: 'Electronics' },
      { id: '2', name: 'Laptop Ultra', sales: 320, revenue: 64000, category: 'Electronics' },
      { id: '3', name: 'Audio Headphones', sales: 680, revenue: 34000, category: 'Accessories' },
      { id: '4', name: 'Smart Watch', sales: 280, revenue: 28000, category: 'Accessories' },
      { id: '5', name: 'Mini Tablet', sales: 220, revenue: 22000, category: 'Electronics' },
    ],
    sales_by_category: [
      { category: 'Electronics', sales: 153500, percentage: 61.4 },
      { category: 'Accessories', sales: 62000, percentage: 24.8 },
      { category: 'Clothing', sales: 34500, percentage: 13.8 },
    ],
    revenue_trend: revenueTrend,
  };
};

export const calculateGrowthRate = (current: number, previous: number): number => {
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
};

export const getRandomColor = (): string => {
  const colors = [
    '#3B82F6', '#EF4444', '#10B981', '#F59E0B',
    '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Mock data generators for API fallbacks
export const generateMockCryptoData = (): CryptoData[] => {
  const coins = [
    { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin' },
    { id: 'ethereum', symbol: 'eth', name: 'Ethereum' },
    { id: 'binancecoin', symbol: 'bnb', name: 'BNB' },
    { id: 'cardano', symbol: 'ada', name: 'Cardano' },
    { id: 'solana', symbol: 'sol', name: 'Solana' },
  ];

  return coins.map((coin, index) => ({
    id: coin.id,
    symbol: coin.symbol,
    name: coin.name,
    current_price: 20000 + Math.random() * 50000,
    price_change_percentage_24h: (Math.random() - 0.5) * 20,
    market_cap: 1000000000 + Math.random() * 1000000000,
    total_volume: 100000000 + Math.random() * 500000000,
    image: `https://assets.coingecko.com/coins/images/${index + 1}/large/${coin.id}.png`,
  }));
};

export const generateMockWeatherData = (city: string): WeatherData => {
  const conditions = ['Clear', 'Clouds', 'Rain', 'Snow', 'Thunderstorm'];
  const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
  
  return {
    location: city,
    temperature: 15 + Math.random() * 20,
    condition: randomCondition,
    humidity: 40 + Math.random() * 40,
    wind_speed: 5 + Math.random() * 15,
    icon: '01d',
  };
};
