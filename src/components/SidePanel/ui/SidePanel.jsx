import { Search } from '../../Search';
import { WeatherDetails } from '../../WeatherDetails';
import { WeatherForecast } from '../../WeatherForecast';
import cls from "./SidePanel.module.css"

export function SidePanel(props) {

  const {
    weatherData,
    setWeatherData,
    forecastData,
    setForecastData
  } = props;
  
  return (
    <aside className={cls.mainScreen__sidebar}>
      <Search setWeatherData={setWeatherData} setForecastData={setForecastData} />
      {weatherData && <WeatherDetails weatherData={weatherData} />}
      {forecastData && <WeatherForecast forecastData={forecastData} />}
   </aside>
  );
}

