import { MainWeatherWidget } from './components/MainWeatherWidget'
import { SidePanel } from './components/SidePanel'
import './styles/App.css'
import { ErrorBadge } from './components/ErrorBadge'
import { useDispatch, useSelector } from 'react-redux'
import { setIsWideScreen } from './store/slices/isWideScreenSlice'
import { useEffect } from 'react'
import { Search } from './components/Search'

function App() {

  const isWideScreen = useSelector((state) => state.isWideScreen.value)
  const dispatch = useDispatch()


  const handleResize = () => {
    dispatch(setIsWideScreen(window.innerWidth >= 768));
  };

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

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
