import React, { useState, useContext } from 'react';
import { WeatherContext } from '../contexts/weather-context';

export default function WeatherForm() {
    const { getCurrentWeather } = useContext(WeatherContext);
    const [ zip, setZip ] = useState('');

    const handleSubmit = (e) => {
        setZip('');
        getCurrentWeather(zip);
        e.preventDefault();
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type='text'
                value={ zip }
                placeholder='enter your zip code'
                onChange={ (e) => setZip(e.target.value)}
            />
            <input type='Submit' value='Search' />
        </form>
    )
}