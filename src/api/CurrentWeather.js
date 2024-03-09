let API_KEY = 'bd06a910ceb13ada14af94da327c4f7e';

async function GetCityLocation(city) {
  let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${city},ru&limit=50&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)
    return {
      lat: data[0].lat,
      lon: data[0].lon
    };
  } catch (error) {
    console.log('Произошла ошибка: ', error);
    throw error;
  }
}

export async function GetCurrentWeather(city) {
  try {

    let location = await GetCityLocation(city);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&lang=ru&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    // Обработка полученных данных
    // console.log(data);
    return data
  } catch (error) {
    console.log('Произошла ошибка: ', error);
    throw error;
  }
}

export async function getForecastWeather(city) {
  try {

    let location = await GetCityLocation(city);
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&lang=ru&units=metric&cnt=5`

    const response = await fetch(url);
    const data = await response.json();

    // Обработка полученных данных
    // console.log(data);
    return data
  } catch (error) {
    console.log('Произошла ошибка: ', error);
    throw error;
  }
  
}