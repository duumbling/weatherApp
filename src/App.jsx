import { MainWeatherWidget } from './components/MainWeatherWidget'
import { SidePanel } from './components/SidePanel'
import './styles/App.css'
import { ErrorBadge } from './components/ErrorBadge'

function App() {

  return (
    <section id="mainScreen">
    <ErrorBadge/>
    <MainWeatherWidget/> 
    <SidePanel/>
    </section>
  )
}

export default App
