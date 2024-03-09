import cls from "./Search.module.css"

export function Search() {
  return (
  <section className={cls.sidebar__searchLocation}>
    <input type="text" className={cls.search} placeholder='Search Location..'/>
    <button className={cls.searchButton}></button>
  </section>
  );
}