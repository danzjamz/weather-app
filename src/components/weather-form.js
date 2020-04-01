import React, { useState, useContext } from 'react';
import { WeatherContext } from '../contexts/weather-context';

export default function WeatherForm() {
    const { getCurrentWeather, getForecast } = useContext(WeatherContext);
    const [ zip, setZip ] = useState('');

    const handleSubmit = (e) => {
        setZip('');
        getCurrentWeather(zip);
        getForecast(zip);
        e.preventDefault();
    }

    return (
        <form onSubmit={ handleSubmit }>
            <p className='search-header'>Finn Byen Din: </p>
            <div>
                <input 
                    className='search-input'
                    type='text'
                    value={ zip }
                    placeholder='enter your zip code'
                    onChange={ (e) => setZip(e.target.value)}
                />
                <button className='search-btn' type='submit'>Enter ZipCode</button>
            </div>
        </form>
    )
}