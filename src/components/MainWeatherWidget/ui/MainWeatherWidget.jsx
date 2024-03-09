import { useEffect, useState } from 'react'
import { getCurrentDate, getCurrentTime } from '../../../helpers'
import cls from './MainWeatherWidget.module.css'



export function MainWeatherWidget({weatherData}) {
  const [offset, setOffset] = useState(0)
  const [currentDate, setCurrentDate] = useState('')
  const [currentTime, setCurrentTime] = useState('')

  useEffect(()=>{
    setOffset(weatherData?.timezone)
    setCurrentDate(getCurrentDate(offset))
    let timer = setInterval(()=>{
      setCurrentTime(getCurrentTime(offset))
    }, 1000)
    return ()=>{
      clearInterval(timer)
    }
  }, [weatherData, offset])

  return (
    <div className={cls.mainScreen__mainInfo}>
    <h1 className={cls.mainInfo__weather}>
      {Math.floor(weatherData?.main?.temp)}°
    </h1>
    <div className={cls.mainInfo__cityInfo}>
      <h2 className={cls.cityInfo__cityName}>
        {weatherData?.name}
      </h2>
      <p className={cls.cityInfo__cityDate}>
      {currentTime} - {currentDate}
      </p>
    </div>
   </div>
  );
}