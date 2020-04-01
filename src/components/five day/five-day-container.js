import React, { useContext } from 'react';
import FiveDayItem from './five-day-item';
import { WeatherContext } from '../../contexts/weather-context';

const FiveDayContainer = () => {
    const { forecast } = useContext(WeatherContext);

    return (
        <div>
            Værvarsel
            <div className='forecast-container'>
                { forecast.filter(item =>{
                    return item.dt_txt.includes('15:00:00')
                }).map(item => {
                    console.log(item)
                    return <FiveDayItem weatherItem={ item } key={ item.dt } />
            })   }
            </div>
        </div>
    )
}

export default FiveDayContainer;