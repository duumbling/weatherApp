import { useEffect, useState } from 'react'
import { getCurrentDate, getCurrentTime } from '../../../helpers'
import cls from './MainWeatherWidget.module.css'
import { useSelector } from 'react-redux'



export function MainWeatherWidget() {
  let weatherData = useSelector((state) => state.currentWeather.value)

  const [offset, setOffset] = useState(0)
  const [currentDate, setCurrentDate] = useState('')
  const [currentTime, setCurrentTime] = useState('')

  useEffect(()=>{
    setOffset(weatherData?.timezone)
    setCurrentDate(getCurrentDate(offset))
    setCurrentTime(getCurrentTime(offset))
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
      {offset && `${Math.floor(weatherData?.main?.temp)}°`}
    </h1>
    <div className={cls.mainInfo__cityInfo}>
      <h2 className={cls.cityInfo__cityName}>
        {offset && weatherData?.name}
      </h2>
      {
      offset && 
      <p className={cls.cityInfo__cityDate}>
      {currentTime || ''} - {currentDate}
      </p>
      }
    </div>
   </div>
  );
}