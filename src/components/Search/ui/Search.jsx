import cls from "./Search.module.css"
import { GetCurrentWeather, getForecastWeather } from '../../../api/CurrentWeather';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTrue, setFalse } from '../../../store/slices/isErrorSlice'
import { setCurrentWeather } from '../../../store/slices/currentWeatherSlice';
import { setForecast } from '../../../store/slices/forecastSlice';

export function Search() {
  
  const dispatch = useDispatch()
  const isError = useSelector((state) => state.isError.value)

  const [city, setCity] = useState('')
  
  const getdata = async () => {
    let answerStatus = await getForecastWeather(city)
    if(answerStatus.cod != 400){
      dispatch(setFalse())
      dispatch(setCurrentWeather(await GetCurrentWeather(city)))
      dispatch(setForecast(await getForecastWeather(city)))
    }else{
      dispatch(setTrue())
      setTimeout(()=>{
        dispatch(setFalse())
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