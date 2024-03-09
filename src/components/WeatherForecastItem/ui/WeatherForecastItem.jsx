import cls from "./WeatherForecastItem.module.css"
import snow from "../assets/Snow.png"

export function WeatherForecastItem(data) {

  const {
    time,
    weather,
    value,
  } = data

  return (
    <li className={cls.forecastList__item}>
    <div className={cls.item__leftSide_container}>
      <img 
        src={snow} 
        alt='weather icon' 
        className={cls.item__img}
      />
      <div className={cls.item__info}>
        <p className={cls.info__time}>
          {time}
        </p>
        <p className={cls.info__weather}>
          {weather}
        </p>
      </div>
    </div>
    <p className={cls.item__value}>
      {value}
    </p>
  </li>
  );
}