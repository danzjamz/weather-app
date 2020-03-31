import React from 'react';

import WeatherContextProvider from './contexts/weather-context';
import WeatherForm from './components/weather-form';
import CurrentWeather from './components/current-weather';

function App() {
  return (
    <div className="App">
      <WeatherContextProvider>
        <WeatherForm />
        <CurrentWeather />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
