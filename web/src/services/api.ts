import axios from 'axios';
import { 
  CryptoData, 
  EcommerceData, 
  WeatherData, 
  generateMockEcommerceData,
  generateMockCryptoData,
  generateMockWeatherData
} from '../utils/shared';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';
const WEATHER_API = 'https://api.openweathermap.org/data/2.5';

// Crypto API functions
export const fetchCryptoData = async (): Promise<CryptoData[]> => {
  try {
    const response = await axios.get(
      `${COINGECKO_API}/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    // Fallback to mock data
    return generateMockCryptoData();
  }
};

export const fetchCryptoPrice = async (coinId: string): Promise<number> => {
  try {
    const response = await axios.get(
      `${COINGECKO_API}/simple/price?ids=${coinId}&vs_currencies=eur`
    );
    return response.data[coinId].eur;
  } catch (error) {
    console.error('Error fetching crypto price:', error);
    return 0;
  }
};

// Weather API functions
export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(
      `${WEATHER_API}/weather?q=${city}&appid=${process.env.VITE_WEATHER_API_KEY}&units=metric`
    );
    
    return {
      location: response.data.name,
      temperature: response.data.main.temp,
      condition: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind_speed: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    // Fallback to mock data
    return generateMockWeatherData(city);
  }
};

// E-commerce data (mock for demo)
export const fetchEcommerceData = async (): Promise<EcommerceData> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return generateMockEcommerceData();
};


