import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/weather-context';

export default function CurrentWeather() {
    const { cityName, desc, temp, day, weatherIcon } = useContext(WeatherContext);

    return (
        <div>
            <div>
                { cityName }
            </div>
            <div>
                { desc }
            </div>
            <div>
                { temp }
            </div>
            <div>
                { day }
            </div>
            <div>
                { weatherIcon ? <img src={ `http://openweathermap.org/img/wn/${ weatherIcon }@2x.png` } /> : null }
            </div>
        </div>
    )
}