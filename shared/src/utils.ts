import { format, subDays } from 'date-fns';
import { fr, enUS } from 'date-fns/locale';

export const formatCurrency = (amount: number, currency = 'EUR'): string => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency,
  }).format(amount);
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('fr-FR').format(num);
};

export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

export const formatDate = (date: string | Date, locale = 'fr'): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const localeObj = locale === 'fr' ? fr : enUS;
  return format(dateObj, 'dd MMM yyyy', { locale: localeObj });
};

export const generateMockEcommerceData = () => {
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
      { id: '1', name: 'Smartphone Pro', sales: 450, revenue: 67500, category: 'Électronique' },
      { id: '2', name: 'Laptop Ultra', sales: 320, revenue: 64000, category: 'Électronique' },
      { id: '3', name: 'Casque Audio', sales: 680, revenue: 34000, category: 'Accessoires' },
      { id: '4', name: 'Montre Connectée', sales: 280, revenue: 28000, category: 'Accessoires' },
      { id: '5', name: 'Tablette Mini', sales: 220, revenue: 22000, category: 'Électronique' },
    ],
    sales_by_category: [
      { category: 'Électronique', sales: 153500, percentage: 61.4 },
      { category: 'Accessoires', sales: 62000, percentage: 24.8 },
      { category: 'Vêtements', sales: 34500, percentage: 13.8 },
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
