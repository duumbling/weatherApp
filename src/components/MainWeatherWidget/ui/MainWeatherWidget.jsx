import { useEffect, useState } from 'react'
import { getCurrentDate, getCurrentTime } from '../../../helpers'
import cls from './MainWeatherWidget.module.css'
import { useSelector } from 'react-redux'



export function MainWeatherWidget() {
  // let weatherData = useSelector((state) => state.currentWeather.value)
  let {cityName, data} = useSelector((state) => state.currentWeather.value)
  console.log(cityName, data)

  const [offset, setOffset] = useState(0)
  const [currentDate, setCurrentDate] = useState('')
  const [currentTime, setCurrentTime] = useState('')

  useEffect(()=>{
    setOffset(data?.timezone)
    setCurrentDate(getCurrentDate(offset))
    setCurrentTime(getCurrentTime(offset))
    let timer = setInterval(()=>{
      setCurrentTime(getCurrentTime(offset))
    }, 1000)
    return ()=>{
      clearInterval(timer)
    }
  }, [data, offset])

  return (
    <div className={cls.mainScreen__mainInfo}>
    <h1 className={cls.mainInfo__weather}>
      {offset && `${Math.floor(data?.main?.temp)}°`}
    </h1>
    <div className={cls.mainInfo__cityInfo}>
      <h2 className={cls.cityInfo__cityName}>
        {offset && cityName || data?.name}
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