import { useState } from 'react'
import { MainWeatherWidget } from './components/MainWeatherWidget'
import { SidePanel } from './components/SidePanel'
import './styles/App.css'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)

  return (
    <section id="mainScreen">
    <MainWeatherWidget weatherData={weatherData}/> 
    <SidePanel 
      weatherData={weatherData}
      setWeatherData={setWeatherData}
      forecastData={forecastData}
      setForecastData={setForecastData}
    />
    </section>
  )
}

export default App
