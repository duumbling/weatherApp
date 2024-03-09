import { MainWeatherWidget } from './components/MainWeatherWidget'
import { SidePanel } from './components/SidePanel'
import './styles/App.css'

function App() {


  return (
    <section id="mainScreen">
    <MainWeatherWidget /> 
    <SidePanel />
    </section>
  )
}

export default App
