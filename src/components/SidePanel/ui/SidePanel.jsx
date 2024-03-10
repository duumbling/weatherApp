import { Search } from '../../Search';
import { WeatherDetails } from '../../WeatherDetails';
import { WeatherForecast } from '../../WeatherForecast';
import cls from "./SidePanel.module.css"

export function SidePanel(props) {

  const {
    isError,
    setIsError,
    weatherData,
    setWeatherData,
    forecastData,
    setForecastData
  } = props;
  
  return (
    <aside className={cls.mainScreen__sidebar}>
      <Search 
        setWeatherData={setWeatherData}
        setForecastData={setForecastData}
        isError={isError}
        setIsError={setIsError}
      />
      {weatherData && <WeatherDetails weatherData={weatherData} />}
      {forecastData && <WeatherForecast forecastData={forecastData} />}
   </aside>
  );
}

