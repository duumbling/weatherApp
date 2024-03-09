import './App.css'

function App() {


  return (
    <section id="mainScreen">
     <div id="mainScreen__mainInfo">
      <h1 id="mainInfo__weather">16°</h1>
      <div id="mainInfo__cityInfo">
        <h2 id="cityInfo__cityName">London</h2>
        <p id="cityInfo__cityDate">06:09 - Monday, 9 Sep</p>
        <span id="cityInfo__weatherImg"></span>
      </div>
     </div>
     <aside id="mainScreen__sidebar">
      <section id="sidebar__searchLocation">
        <input type="text" id="search"/>
        <button id="searchButton"></button>
      </section>
      <section id="sidebar__weatherDetails">
        <h3 id="weatherDetails__sectionBadge">Weather Details</h3>
        <p id="weatherDetails__currentWeather">thunderstorm with light drizzle</p>
        <ul id="weatherDetails__detailsList">
          <li id="detailsList__item">
            <p id="item__name">Temp max</p>
            <p id="item__value">19°</p>
            <p id="item__img"></p>
          </li>
          <li id="detailsList__item">
            <p id="item__name">Temp min</p>
            <p id="item__value">15°</p>
            <p id="item__img"></p>
          </li>
          <li id="detailsList__item">
            <p id="item__name">Humadity</p>
            <p id="item__value">58%</p>
            <p id="item__img"></p>
          </li>
          <li id="detailsList__item">
            <p id="item__name">Cloudy</p>
            <p id="item__value">86%</p>
            <p id="item__img"></p>
          </li>
          <li id="detailsList__item">
            <p id="item__name">Wind</p>
            <p id="item__value">5km/h</p>
            <p id="item__img"></p>
          </li>
        </ul>
      </section>
      <section id="sidebar__weatherForecast">
      <h3 id="weatherForecast__sectionBadge">Today’s Weather Forecast</h3>
      <ul id="weatherForecast__forecastList">
        <li id="forecastList__item">
          <p id="item__img"></p>
          <div id="item__info">
            <p id="info__time">9:00</p>
            <p id="info__weather">Snow</p>
          </div>
          <p id="item__value">19°</p>
        </li>
        <li id="forecastList__item">
          <p id="item__img"></p>
          <div id="item__info">
            <p id="info__time">9:00</p>
            <p id="info__weather">Snow</p>
          </div>
           <p id="item__value">19°</p>
        </li>
        <li id="forecastList__item">
          <p id="item__img"></p>
          <div id="item__info">
            <p id="info__time">9:00</p>
            <p id="info__weather">Snow</p>
          </div>
           <p id="item__value">19°</p>
        </li>
        <li id="forecastList__item">
          <p id="item__img"></p>
          <div id="item__info">
            <p id="info__time">9:00</p>
            <p id="info__weather">Snow</p>
          </div>
           <p id="item__value">19°</p>
        </li>
        <li id="forecastList__item">
          <p id="item__img"></p>
          <div id="item__info">
            <p id="info__time">9:00</p>
            <p id="info__weather">Snow</p>
          </div>
           <p id="item__value">19°</p>
        </li>
      </ul>
      </section>
     </aside>
    </section>
  )
}

export default App
