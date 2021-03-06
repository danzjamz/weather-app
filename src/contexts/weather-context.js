import React, { createContext, useReducer, useState } from 'react';
// import { weatherReducer } from '../reducers/WeatherReducers';
export const WeatherContext = createContext()
const apiKey = process.env.REACT_APP_WEATHER_API_KEY
const state = {
    currentWeather: {
        cityName: '',
        day: '',
        weatherDescription: '',
        temp: '',
        weatherIcon: '',
    },
    forecast: []
}
const WeatherContextProvider = (props) => {
    const [weather, setWeather] = useState(state)
    const [forecast, setForecast] = useState(state)

    const getCurrentWeather = (zip) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${ zip }&appid=${ apiKey }&lang=no`)
        .then(response => response.json())
        .then(data => {
            setWeather({
                ...weather,
                cityName: data.name,
                day: new Date().toDateString(),
                weatherDescription: data.weather[0].description,
                temp: data.main.temp,
                weatherIcon: data.weather[0].icon,
            });
        })
        .catch(err => {
            console.log('There was an error fetching the weather api,', err)
        });
    }

    const getForecast = (zip) => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${ zip }&appid=${ apiKey }&lang=no`)
        .then(response => response.json())
        .then(data => {
            setForecast({ forecast: data.list });
        })
        .catch(err => {
            console.log('There was an error fetching the weather api,', err)
        });
    }
    return (
        <WeatherContext.Provider value={{ ...weather, getCurrentWeather: getCurrentWeather, ...forecast, getForecast: getForecast}}>
            {props.children}
        </WeatherContext.Provider>
    );
}
export default WeatherContextProvider;