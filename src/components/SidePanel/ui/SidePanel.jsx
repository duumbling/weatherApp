import { Search } from '../../Search';
import { WeatherDetails } from '../../WeatherDetails';
import { WeatherForecast } from '../../WeatherForecast';
import cls from "./SidePanel.module.css"

export function SidePanel() {
  return (
    <aside className={cls.mainScreen__sidebar}>
      <Search />
      <WeatherDetails/>
      <WeatherForecast />
   </aside>
  );
}

