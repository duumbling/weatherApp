import { WeatherForecastItem } from '../../WeatherForecastItem'
import { useEffect, useState } from 'react'
import cls from "./WeatherForecast.module.css"
import { useSelector } from 'react-redux'

export function WeatherForecast() {

  const forecastData = useSelector((state) => state.forecast.value)

  const [weatherDetailsData, setWeatherDetailsData] = useState([])

    useEffect(()=>{
      let newData = [] 
      if(forecastData?.list !== undefined){
        forecastData?.list?.map(({dt_txt, main, weather}) => {
          let newForecastItem = {
            time: dt_txt.substring(11, 16),
            weather: weather[0].description,
            value: Math.floor(main.temp),
            image: `http://openweathermap.org/img/w/${weather[0].icon}.png`
          }
          newData.push(newForecastItem)
        })
        setWeatherDetailsData(newData)
      }
      
    

    }, [forecastData])

  const SECTION_BADGE = 'Прогноз погоды на 12 часов:'

  return (
    <section className={cls.sidebar__weatherForecast}>
    <h3 className={cls.weatherForecast__sectionBadge}>
      {SECTION_BADGE}
      </h3>
    <ul className={cls.weatherForecast__forecastList}>
      {weatherDetailsData.map(({time, weather, value, image}) => 
        <WeatherForecastItem 
          key={time}
          time={time}
          weather={weather}
          value={value}
          image={image}
        />
      )}
    </ul>
    </section> 
  );
}
