import cls from "./Search.module.css"
import { GetCurrentWeather, getForecastWeather } from '../../../api/CurrentWeather';
import { useState } from 'react';

export function Search(props) {

  const {
    setWeatherData,
    setForecastData,
    setIsError,
    isError
  } = props

  const [city, setCity] = useState('')
  
  const getdata = async () => {
    let answerStatus = await getForecastWeather(city)
    if(answerStatus.cod != 400){
      setIsError(false)
      setWeatherData(await GetCurrentWeather(city))
      setForecastData(await getForecastWeather(city))
    }else{
      setIsError(true)
      setTimeout(()=>{
        setIsError(false)
      }, 3000)
    }
  }

  const inputHandler = (e) => {
    setCity(e.target.value)
  }
  
  let inputCls = isError ?
   `${cls.search} ${cls.error}` :
    `${cls.search}`;

  return (
  <section className={cls.sidebar__searchLocation}>
    <input 
      type="text" 
      className={inputCls} 
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