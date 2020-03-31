import React from 'react';
import WeatherContextProvider from './contexts/weather-context';
import WeatherForm from './components/weather-form';

function App() {
  return (
    <div className="App">
      <WeatherContextProvider>
        <WeatherForm />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
