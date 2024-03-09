import cls from "./Search.module.css"
import { GetCurrentWeather, getForecastWeather } from '../../../api/CurrentWeather';
import { useState } from 'react';

export function Search(props) {

  const {
    setWeatherData,
    setForecastData
  } = props

  const [city, setCity] = useState('')
  
  const getdata = async () => {
    setWeatherData(await GetCurrentWeather(city))
    setForecastData(await getForecastWeather(city))
  }

  const inputHandler = (e) => {
    setCity(e.target.value)
  }

  return (
  <section className={cls.sidebar__searchLocation}>
    <input 
      type="text" 
      className={cls.search} 
      placeholder='Search Location..'
      onChange={inputHandler}
      value={city}
    />
      
    <button 
    className={cls.searchButton}
    onClick={getdata}
    ></button>
  </section>
  );
}