import { useEffect, useState } from 'react';
import { WeatherDetailsItem } from '../../WeatherDetailsItem';
import cls from "./WeatherDetails.module.css"
import { useSelector } from 'react-redux';

export function WeatherDetails() {
  const {data} = useSelector((state) => state.currentWeather.value)

  const [WeatherDetailsData, setWeatherDetailsData] = useState([])
  const [currentWeatherDescription, setCurrentWeatherDescription] = useState('')

  useEffect(()=>{
    let max = Math.max(Math.floor(Number(data?.main?.temp_max)), Math.floor(data?.main?.temp_min))
    let min = Math.min(Math.floor(Number(data?.main?.temp_max)), Math.floor(data?.main?.temp_min))
    const newData = [
      { 
        name: "Мин. температура",
        value: `${min || 0}°`
      },
      {
        name: "Макс. температура",
        value: `${max || 0}°`
      },
      {
        name: "Влажность",
        value: `${data?.main?.humidity || 0}%`
      },
      {
        name: "Облачность",
        value: `${data?.clouds?.all || 0}%`
      },
      {
        name: "Ветер",
        value: `${Math.floor(data?.wind?.speed || 0)}км/ч`
      }
    ]
    
    if(data) {
      let weatherArray = data?.weather || [];
      let weatherDescription = weatherArray[0]?.description
      setCurrentWeatherDescription(weatherDescription)
    }
    setWeatherDetailsData(newData)

  }, [data])



  return (
    <section className={cls.sidebar__weatherDetails}>
      <p className={cls.weatherDetails__currentWeather}>
        {currentWeatherDescription}
      </p>
      <ul className={cls.weatherDetails__detailsList}>
        {WeatherDetailsData.map(({name, value}) => 
        <WeatherDetailsItem 
          key={name}
          name={name} 
          value={value}
        />
        )}
      </ul>
    </section>
  );
}
