const API_KEY = import.meta.env.VITE_API_KEY

async function GetCityLocation(city) {
  let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${city},ru&limit=50&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      lat: data[0].lat,
      lon: data[0].lon
    };
  } catch (error) {
    return error;
  }
}

export async function GetCurrentWeather(city) {
  try {

    let location = await GetCityLocation(city);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&lang=ru&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    // Обработка полученных данных
    return data
  } catch (error) {
    return error;
  }
}

export async function getForecastWeather(city) {
  try {

    let location = await GetCityLocation(city);
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&lang=ru&units=metric&cnt=5`

    const response = await fetch(url);
    const data = await response.json();

    // Обработка полученных данных
    return data
  } catch (error) {
    return error;
  }
  
}