import { useQuery } from '@tanstack/react-query';
import { fetchCryptoData, fetchEcommerceData, fetchWeatherData } from '../services/api';

export const useCryptoData = () => {
  return useQuery({
    queryKey: ['crypto'],
    queryFn: fetchCryptoData,
    refetchInterval: 30000, // Refetch every 30 seconds
    staleTime: 10000, // Consider data stale after 10 seconds
  });
};

export const useEcommerceData = () => {
  return useQuery({
    queryKey: ['ecommerce'],
    queryFn: fetchEcommerceData,
    refetchInterval: 60000, // Refetch every minute
    staleTime: 30000, // Consider data stale after 30 seconds
  });
};

export const useWeatherData = (city: string) => {
  return useQuery({
    queryKey: ['weather', city],
    queryFn: () => fetchWeatherData(city),
    enabled: !!city,
    refetchInterval: 300000, // Refetch every 5 minutes
    staleTime: 60000, // Consider data stale after 1 minute
  });
};
