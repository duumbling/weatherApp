import { useSelector } from 'react-redux';
import { Search } from '../../Search';
import { WeatherDetails } from '../../WeatherDetails';
import { WeatherForecast } from '../../WeatherForecast';
import cls from "./SidePanel.module.css"

export function SidePanel() {

  const weatherData = useSelector((state) => state.currentWeather.value)
  const forecastData = useSelector((state) => state.forecast.value)
  const isWideScreen = useSelector((state) => state.isWideScreen.value)


  return (
    <aside className={cls.mainScreen__sidebar}>
      {isWideScreen && <Search/>}
      {weatherData && <WeatherDetails/>}
      {forecastData && <WeatherForecast/>}
   </aside>
  );
}

