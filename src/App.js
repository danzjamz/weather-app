import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons'

import WeatherContextProvider from './contexts/weather-context';
import WeatherForm from './components/weather-form';
import CurrentWeather from './components/current-weather';
import FiveDayContainer from './components/five day/five-day-container';

library.add(faSun, faCloudShowersHeavy)

function App() {
  return (
    <div className="App app-cont">
      <WeatherContextProvider>
        <div className="app-wrapper">
          <h1>
            <FontAwesomeIcon icon='sun' className='sun-icon' />
            Det er Vær Tid!
            <FontAwesomeIcon icon='cloud-showers-heavy' className='storm-icon' />
          </h1>
          <WeatherForm />
          <div className='weather-container'>
            <CurrentWeather />
            <FiveDayContainer />
          </div>
        </div>
      </WeatherContextProvider>
    </div>
  );
}

export default App;
