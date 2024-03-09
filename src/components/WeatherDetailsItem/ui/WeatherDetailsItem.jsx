import cls from "./WeatherDetailsItem.module.css"
import tempMin from "../assets/Min.png"
import tempMax from "../assets/Max.png"
import humadity from "../assets/Humadity.png"
import cloudy from "../assets/Cloudy.png"
import wind from "../assets/Wind.png"

const images = {
  'Temp min': tempMin,
  'Temp max': tempMax,
  "Humadity": humadity,
  "Cloudy": cloudy,
  "Wind": wind,
}

export function WeatherDetailsItem(data) {
  const {
    name,
    value
  } = data
  return (
    <li className={cls.detailsList__item}>
      <div className={cls.item__info}>
        <p className={cls.item__name}>{name}</p>
        <p className={cls.info__value}>{value}</p>
      </div>
      <img 
          src={images[name]}
          alt="image"
          className={cls.info__img}/>
    </li>
  );
}
