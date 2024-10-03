import React from 'react';


const cities = [
    {
      name: 'Москва',
      image: 'https://example.com/moscow.jpg',
      description: 'Столица России, крупнейший политический, экономический и культурный центр страны.',
      facts: ['Население: около 12,5 млн человек', 'Основана в 1147 году', 'Крупнейший метрополитен в мире']
    },
    {
      name: 'Санкт-Петербург',
      image: 'https://example.com/spb.jpg',
      description: 'Второй по величине город России, культурная столица страны.',
      facts: ['Население: около 5,4 млн человек', 'Основан в 1703 году Петром I', 'Более 200 музеев']
    },
    {
      name: 'Новосибирск',
      image: 'https://example.com/novosibirsk.jpg',
      description: 'Третий по населению город России, крупный научный и культурный центр Сибири.',
      facts: ['Население: около 1,6 млн человек', 'Основан в 1893 году', 'Крупнейший научный центр России']
    }
  ];

  const CitySelector = ({ onSelect }) => {
    return (
      <div>
        <label htmlFor="city-select">Выберите город:</label>
        <select id="city-select" onChange={(e) => onSelect(e.target.value)}>
          <option value="">--Выберите город--</option>
          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default CitySelector;
  export { cities };