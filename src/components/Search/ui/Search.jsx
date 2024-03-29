import cls from "./Search.module.css"
import { getCurrentWeather, getForecastWeather } from '../../../api/WeatherAPI';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorStatusTrue, setErrorStatusFalse } from '../../../store/slices/isErrorSlice'
import { setCurrentWeather } from '../../../store/slices/currentWeatherSlice';
import { setForecast } from '../../../store/slices/forecastSlice';

export function Search() {
  
  const dispatch = useDispatch()
  const isError = useSelector((state) => state.isError.value)

  const [city, setCity] = useState('')

  const getdata = async () => {
    let answerStatus = await getForecastWeather(city)
    if(answerStatus.cod != 400){
      setCity('')
      dispatch(setErrorStatusFalse())
      dispatch(setCurrentWeather(await getCurrentWeather(city)))
      dispatch(setForecast(await getForecastWeather(city)))
    }else{
      dispatch(setErrorStatusTrue())
      setTimeout(()=>{
        dispatch(setErrorStatusFalse())
      }, 3000)
    }
  }

  const inputHandler = (e) => {
    setCity(e.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getdata()
    }
  };
  
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
      onKeyDown={handleKeyDown}
      value={city}
    />
    
    <button 
    className={cls.searchButton}
    onClick={getdata}
    ></button>
  </section>
  );
}