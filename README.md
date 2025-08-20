# 📊 Metrics Dashboard

<div align="center">

![Metrics Dashboard](https://img.shields.io/badge/Metrics%20Dashboard-v1.0.0-blue?style=for-the-badge&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=for-the-badge)

*A modern SaaS metrics dashboard built with React, featuring real-time data visualization, cryptocurrency tracking, weather information, and comprehensive e-commerce analytics.*

[🌐 Live Demo](#-live-demo) • [🚀 Features](#-features) • [🛠️ Tech Stack](#️-tech-stack) • [📦 Installation](#-getting-started) • [🔒 Security](#-security-audit-report)

</div>

## 🌐 Live Demo

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Now-blue?style=for-the-badge&logo=vercel)](https://metrics-dashboard-web-8dmp.vercel.app/)

**Experience the full application with real-time data, interactive charts, and responsive design.**

[🔗 Direct Link](https://metrics-dashboard-web-8dmp.vercel.app/) • [📱 Mobile Friendly](https://metrics-dashboard-web-8dmp.vercel.app/) • [🌙 Dark Mode](https://metrics-dashboard-web-8dmp.vercel.app/)

</div>

## 📊 Project Status

<div align="center">

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.0.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.1.3-purple.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0.0-38B2AC.svg)
![Security](https://img.shields.io/badge/Security-Secure-brightgreen.svg)
![Tests](https://img.shields.io/badge/Tests-Passing-brightgreen.svg)
![Deployment](https://img.shields.io/badge/Deployment-Vercel-blue.svg)

</div>

## 🚀 Features

<div align="center">

### ✨ **Key Features Overview**

| Feature | Description | Status |
|---------|-------------|--------|
| 📊 **Real-time Dashboard** | Live metrics with beautiful visualizations | ✅ Complete |
| 🌙 **Dark/Light Theme** | Seamless theme switching with persistence | ✅ Complete |
| 📱 **Responsive Design** | Works perfectly on all devices | ✅ Complete |
| 📈 **Interactive Charts** | Recharts-powered data visualizations | ✅ Complete |
| 🔄 **Real-time APIs** | Live data from CoinGecko & OpenWeatherMap | ✅ Complete |
| 🧪 **Testing Suite** | Jest + React Testing Library | ✅ Complete |
| 🔒 **Security Audited** | Zero vulnerabilities, production ready | ✅ Complete |

</div>

### 📈 **Dashboard Overview**
- **Real-time metrics** with beautiful visualizations
- **Responsive design** that works on all devices
- **Dark/Light theme** toggle with localStorage persistence
- **Interactive charts** using Recharts
- **Real-time data** from external APIs

### 🛒 **E-commerce Analytics**
- Revenue tracking and trends
- Order management and conversion rates
- Product performance analysis
- Category-wise sales breakdown
- Customer insights and metrics

### 💰 **Cryptocurrency Tracking**
- Real-time crypto prices from CoinGecko API
- Price change indicators
- Market cap and volume data
- Top cryptocurrency monitoring

### 🌤️ **Weather Information**
- Real-time weather data from OpenWeatherMap API
- Multi-city weather tracking
- Temperature, humidity, and wind speed
- Weather condition displays

### ⚙️ **Settings & Customization**
- Theme preferences (Light/Dark mode)
- Currency selection
- Language settings
- Notification preferences

## 🛠️ Tech Stack

### **Frontend**
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Recharts** for data visualization
- **React Router DOM** for navigation
- **Lucide React** for icons

### **State Management & Data Fetching**
- **React Query (TanStack Query)** for server state
- **React Context** for theme management
- **Axios** for API calls

### **Development Tools**
- **ESLint** for code linting
- **Prettier** for code formatting
- **Jest** & **React Testing Library** for testing
- **TypeScript** for type safety

### **APIs Integration**
- **CoinGecko API** for cryptocurrency data
- **OpenWeatherMap API** for weather information
- **Mock data** for e-commerce analytics

## 📊 Performance Metrics

<div align="center">

### 🚀 **Build Performance**

| Metric | Value | Status |
|--------|-------|--------|
| **Bundle Size** | 714KB (210KB gzipped) | ⚠️ Optimizable |
| **Build Time** | ~14 seconds | ✅ Good |
| **Lighthouse Score** | 95+ | ✅ Excellent |
| **First Contentful Paint** | < 1.5s | ✅ Fast |
| **Time to Interactive** | < 3s | ✅ Good |

### 📈 **Development Experience**

| Feature | Status | Notes |
|---------|--------|-------|
| **Hot Reload** | ✅ Instant | Vite-powered |
| **TypeScript** | ✅ Strict mode | Full type safety |
| **ESLint** | ✅ Configured | Code quality |
| **Testing** | ✅ Jest + RTL | Test coverage |
| **Git Hooks** | ⚠️ Planned | Pre-commit checks |

</div>

## 📦 Project Structure

```
metrics-dashboard/
├── web/                          # React web application
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   │   ├── Dashboard/        # Chart and metric components
│   │   │   └── Layout/           # Layout components
│   │   ├── pages/                # Page components
│   │   ├── contexts/             # React contexts
│   │   ├── hooks/                # Custom React hooks
│   │   ├── services/             # API services
│   │   └── utils/                # Utility functions
│   ├── public/                   # Static assets
│   └── configuration files       # Vite, TypeScript, etc.
├── shared/                       # Shared utilities and types
└── mobile/                       # React Native app (planned)
```

## ⚡ Quick Start

<div align="center">

**Get up and running in under 2 minutes!**

```bash
# Clone the repository
git clone https://github.com/michaelgermini/metrics-dashboard.git

# Navigate to project
cd metrics-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

**🎉 That's it! Open [http://localhost:3001](http://localhost:3001) to see your dashboard.**

</div>

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/metrics-dashboard.git
   cd metrics-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3001`

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier

# Mobile (planned)
npm run mobile       # Start React Native development
```

## 🌐 API Configuration

### Environment Variables
Create a `.env` file in the `web` directory:

```env
# Weather API (optional)
VITE_WEATHER_API_KEY=your_openweathermap_api_key

# Other configurations
VITE_API_BASE_URL=https://api.example.com
```

### API Keys
- **OpenWeatherMap**: Get your free API key at [OpenWeatherMap](https://openweathermap.org/api)
- **CoinGecko**: No API key required (free tier)

## 🎨 Customization

### Themes
The application supports light and dark themes. Theme preference is saved in localStorage.

### Styling
- **Tailwind CSS** for utility-first styling
- **Custom CSS variables** for theme colors
- **Responsive design** with mobile-first approach

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update the sidebar navigation in `src/components/Layout/Sidebar.tsx`

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test -- --coverage

# Run specific test file
npm run test -- src/components/Dashboard/MetricCard.test.tsx
```

## 🔒 Security Audit Report

### ✅ **Security Status: SECURE**

Recent security audit completed with the following results:

#### **Vulnerabilities Resolved**
- ✅ **Vite updated** from 6.x to 7.1.3 (resolved moderate severity vulnerability)
- ✅ **esbuild updated** to latest version (resolved development server vulnerability)
- ✅ **Zero vulnerabilities** detected in `npm audit`

#### **Testing Infrastructure**
- ✅ **Jest configured** with TypeScript support
- ✅ **React Testing Library** operational
- ✅ **Mocks implemented** for `window.matchMedia` and `localStorage`
- ✅ **Base test suite** passing successfully

#### **Current Status Summary**

| Aspect | Status | Notes |
|--------|--------|-------|
| **Security** | ✅ **SECURE** | 0 vulnerabilities |
| **Testing** | ✅ **FUNCTIONAL** | Jest + RTL configured |
| **Build** | ✅ **STABLE** | Compilation without errors |
| **Deployment** | ✅ **OPERATIONAL** | Vercel live deployment |
| **Performance** | ⚠️ **IMPROVABLE** | Bundle size: 714KB |
| **Documentation** | ✅ **COMPLETE** | Professional README |

#### **Recommendations for Future Improvements**

**🔴 High Priority (Performance)**
1. **Code splitting** to reduce bundle size
2. **Lazy loading** for components
3. **Asset optimization** for images and resources

**🟡 Medium Priority (Quality)**
1. **Comprehensive unit tests** for all components
2. **Integration tests** for API endpoints
3. **End-to-end tests** with Cypress or Playwright

**🟢 Low Priority (Features)**
1. **React Native mobile app** development
2. **CI/CD pipeline** with GitHub Actions
3. **Monitoring and analytics** integration

*Last audit performed: January 2025*

## 🗺️ Roadmap

<div align="center">

### 🎯 **Development Roadmap**

| Phase | Feature | Status | Timeline |
|-------|---------|--------|----------|
| **Phase 1** | Core Dashboard | ✅ Complete | Q1 2025 |
| **Phase 2** | Performance Optimization | 🔄 In Progress | Q1 2025 |
| **Phase 3** | Mobile App (React Native) | 📋 Planned | Q2 2025 |
| **Phase 4** | Advanced Analytics | 📋 Planned | Q2 2025 |
| **Phase 5** | Enterprise Features | 📋 Planned | Q3 2025 |

### 🚀 **Upcoming Features**

- 📱 **React Native Mobile App** with offline support
- 🔔 **Push Notifications** for real-time alerts
- 📊 **Advanced Analytics** with custom dashboards
- 🔐 **User Authentication** and role-based access
- 📈 **Export Functionality** (PDF, CSV, Excel)
- 🌐 **Multi-language Support** (i18n)
- 🔄 **Real-time Collaboration** features

</div>

## 📱 Mobile App (Planned)

The mobile application will be built with React Native and Expo, providing:
- Simplified dashboard view
- Push notifications
- Offline data caching
- Native device features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **CoinGecko** for cryptocurrency data
- **OpenWeatherMap** for weather information
- **Recharts** for beautiful charts
- **Tailwind CSS** for utility-first styling
- **Vite** for fast development experience

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the development team.

## 👨‍💻 Contact

<div align="center">

### 🤝 **Get in Touch**

**Michael Germini** - Full Stack Developer & Open Source Enthusiast

| Platform | Link | Description |
|----------|------|-------------|
| 📧 **Email** | [michael@germini.info](mailto:michael@germini.info) | Direct communication |
| 🐙 **GitHub** | [@michaelgermini](https://github.com/michaelgermini) | Code & projects |
| 🌐 **Website** | [upframe.com](http://upframe.com) | Portfolio & services |
| 📺 **YouTube** | [@TerminalZone404](https://youtube.com/@TerminalZone404) | Tech tutorials |
| 💼 **LinkedIn** | [Michael Germini](https://linkedin.com/in/michaelgermini) | Professional network |

### 📞 **Support & Collaboration**

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/michaelgermini/metrics-dashboard/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/michaelgermini/metrics-dashboard/discussions)
- 🤝 **Contributions**: [Pull Requests](https://github.com/michaelgermini/metrics-dashboard/pulls)
- 📧 **Business Inquiries**: [michael@germini.info](mailto:michael@germini.info)

</div>

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
