const API_KEY = import.meta.env.VITE_API_KEY

async function getCityLocation(city) {
  let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},ru&limit=100&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      lat: data[0].lat,
      lon: data[0].lon,
      cityName: data[0].local_names.ru
    };
  } catch (error) {
    return error;
  }
}

export async function getCurrentWeather(city = null, lat = null, lon = null) {
  try {
    let location = await getCityLocation(city);
    let cityName;
    if(city){
      lat = location.lat;
      lon = location.lon;
      cityName = location.cityName
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=ru&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    // Обработка полученных данных
    return {cityName, data}
  } catch (error) {
    return error;
  }
}

export async function getForecastWeather(city = null, lat = null, lon = null) {
  try {
    let location = await getCityLocation(city);

    if(city){
      lat = location.lat;
      lon = location.lon;
    }

    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=ru&units=metric&cnt=5`
    const response = await fetch(url);
    const data = await response.json();

    // Обработка полученных данных
    return data
  } catch (error) {
    return error;
  }
  
}