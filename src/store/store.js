import { configureStore } from '@reduxjs/toolkit'
import isErrorSlice from './slices/isErrorSlice'
import currentWeatherSlice  from './slices/currentWeatherSlice'
import forecastSlice from './slices/forecastSlice'

export const store = configureStore({
  reducer: {
    isError: isErrorSlice,
    currentWeather: currentWeatherSlice,
    forecast: forecastSlice,
  },
})