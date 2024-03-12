import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {},
}

export const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
    reducers: {
      setCurrentWeather: (state, action) => {
        state.value = action.payload
      },
    resetCurrentWeather: (state) => {
      state.value = {}
    },
  },
})

export const { setCurrentWeather, resetCurrentWeather } = currentWeatherSlice.actions

export default currentWeatherSlice.reducer