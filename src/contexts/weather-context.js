import React, { createContext, useReducer } from 'react';
import { weatherReducer } from '../reducers/weather-reducers';

export const WeatherContext = createContext();

const state = {
    cityName: '',
    day: '',
    weatherDesc: '',
    temp: '',
    icon: '',
    forecast: []
}

const WeatherContextProvider = (props) => {
    const [ weather, dispatch ] = useReducer(weatherReducer, state) 

    return (
        <WeatherContext.Provider>
            { props.children }
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider;