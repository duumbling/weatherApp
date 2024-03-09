import { WeatherDetailsItem } from '../../WeatherDetailsItem';
import cls from "./WeatherDetails.module.css"

export function WeatherDetails() {

  const data = [
    {
      name: "Temp max",
      value: '19°'
    },
    {
      name: "Temp min",
      value: '15°'
    },
    {
      name: "Humadity",
      value: '58%'
    },
    {
      name: "Cloudy",
      value: '86&'
    },
    {
      name: "Wind",
      value: '5km/h'
    }
  ]

  const SECTION_BADGE = 'Weather Details:'
  const CURRENT_WEATHER = 'thunderstorm with light drizzle'

  return (
    <section className={cls.sidebar__weatherDetails}>
      <h3 className={cls.weatherDetails__sectionBadge}>
        {SECTION_BADGE}
      </h3>
      <p className={cls.weatherDetails__currentWeather}>
        {CURRENT_WEATHER}
      </p>
      <ul className={cls.weatherDetails__detailsList}>
        {data.map(({name, value}) => 
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
