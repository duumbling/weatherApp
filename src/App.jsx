import { useState } from 'react'
import { MainWeatherWidget } from './components/MainWeatherWidget'
import { SidePanel } from './components/SidePanel'
import './styles/App.css'
import { ErrorBadge } from './components/ErrorBadge'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const [isError, setIsError] = useState(false)

  return (
    <section id="mainScreen">
    <ErrorBadge 
    errorText={'Введите, пожалуйста, правильное название города'}
    visible={isError}
    />
    <MainWeatherWidget weatherData={weatherData}/> 
    <SidePanel 
      setIsError={setIsError}
      isError={isError}
      weatherData={weatherData}
      setWeatherData={setWeatherData}
      forecastData={forecastData}
      setForecastData={setForecastData}
    />
    </section>
  )
}

export default App
