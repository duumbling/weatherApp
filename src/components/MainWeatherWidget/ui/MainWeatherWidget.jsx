import cls from './MainWeatherWidget.module.css'

export function MainWeatherWidget() {
  return (
    <div className={cls.mainScreen__mainInfo}>
    <h1 className={cls.mainInfo__weather}>
      {16}°
    </h1>
    <div className={cls.mainInfo__cityInfo}>
      <h2 className={cls.cityInfo__cityName}>
        London
      </h2>
      <p className={cls.cityInfo__cityDate}>
       06:09 - Monday, 9 Sep
      </p>
      <span className={cls.cityInfo__weatherImg}></span>
    </div>
   </div>
  );
}