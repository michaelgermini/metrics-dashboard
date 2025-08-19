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
