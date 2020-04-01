import React from 'react';

const FiveDayItem = ({ weatherItem }) => {
    console.log(weatherItem)
    const date = new Date(weatherItem.dt_txt).toDateString()

    return (
        <div className='weather-item'>
            <div>
                { weatherItem.weather[0].description }
            </div>
            <div>
                { weatherItem.main.temp }
            </div>
            <div>
                <img src={ `http://openweathermap.org/img/wn/${ weatherItem.weather[0].icon }@2x.png` } />
            </div>
        </div>
    )
}

export default FiveDayItem;