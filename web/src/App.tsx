import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Overview } from './pages/Overview';
import { Ecommerce } from './pages/Ecommerce';
import { Crypto } from './pages/Crypto';
import { Weather } from './pages/Weather';
import { Settings } from './pages/Settings';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}

export default App;
