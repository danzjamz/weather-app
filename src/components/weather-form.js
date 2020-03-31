import React, { useState } from 'react';

export default function WeatherForm() {
    const [ zip, setZip ] = useState('');
    const handleSubmit = (e) => {
        setZip('');
        e.preventDefault();
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type='text'
                value={ zip }
                onChange={ (e) => setZip(e.target.value)}
            />
            <input type='Submit' value='Search' />
        </form>
    )
}