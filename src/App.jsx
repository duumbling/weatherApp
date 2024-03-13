import { MainWeatherWidget } from './components/MainWeatherWidget'
import { SidePanel } from './components/SidePanel'
import './styles/App.css'
import { ErrorBadge } from './components/ErrorBadge'
import { useDispatch, useSelector } from 'react-redux'
import { setIsWideScreen } from './store/slices/isWideScreenSlice'
import { useEffect } from 'react'
import { Search } from './components/Search'
import { setCurrentWeather } from './store/slices/currentWeatherSlice'
import { setForecast } from './store/slices/forecastSlice'
import { getCurrentWeather, getForecastWeather } from './api/WeatherAPI'
import { getUserLocation } from './helpers/getUserLocation'

function App() {

  const isWideScreen = useSelector((state) => state.isWideScreen.value)
  const dispatch = useDispatch()

  

  const handleResize = () => {
    dispatch(setIsWideScreen(window.innerWidth >= 768));
  };


  useEffect(() => {
    setUserLocationWeather()
    handleResize()

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  });

  async function setUserLocationWeather(){
    let { lat, lon } = await getUserLocation()
    dispatch(setCurrentWeather(await getCurrentWeather('', lat, lon)))
    dispatch(setForecast(await getForecastWeather('', lat, lon)))
  }


  return (
    <section id="mainScreen">
    {!isWideScreen && <Search/>}
    <ErrorBadge/>
    <MainWeatherWidget/> 
    <SidePanel/>
    </section>
  )
}

export default App
