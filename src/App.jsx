import { useState } from 'react'

import './App.css'
import CitySelector, { cities } from './components/CitySelector';
import CityCard from './components/CityCard';

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (cityName) => {
    const city = cities.find((c) => c.name === cityName);
    setSelectedCity(city);
  };

  return (
    <div className="app">
      <h1>City Cards</h1>
      <CitySelector cities={cities} onSelect={handleCitySelect} />
      <CityCard city={selectedCity} />
    </div>
  );
};

export default App;
