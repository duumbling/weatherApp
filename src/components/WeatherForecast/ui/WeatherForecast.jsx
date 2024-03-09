import { WeatherForecastItem } from '../../WeatherForecastItem'
import cls from "./WeatherForecast.module.css"

export function WeatherForecast() {

  const data = [
    {
      time: '12:00',
      weather: 'Snow',
      value: '- 11°',
    },
    {
      time: '15:00',
      weather: 'Snow',
      value: '- 20°',
    },
    {
      time: '18:00',
      weather: 'Snow',
      value: '- 28°',
    },
    {
      time: '21:00',
      weather: 'Snow',
      value: '- 25°', 
    },
    {
      time: '00:00',
      weather: 'Snow',
      value: '- 16°',
    }
  ]

  const SECTION_BADGE = 'Today’s Weather Forecast:'

  return (
    <section className={cls.sidebar__weatherForecast}>
    <h3 className={cls.weatherForecast__sectionBadge}>
      {SECTION_BADGE}
      </h3>
    <ul className={cls.weatherForecast__forecastList}>
      {data.map(({time, weather, value}) => 
        <WeatherForecastItem 
          key={time}
          time={time}
          weather={weather}
          value={value}
        />
      )}
    </ul>
    </section> 
  );
}
