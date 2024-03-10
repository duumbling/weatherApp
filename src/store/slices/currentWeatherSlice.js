import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {},
}

export const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
    reducers: {
      setCurrentWeather: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value = action.payload
      },
    resetCurrentWeather: (state) => {
      state.value = {}
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentWeather, resetCurrentWeather } = currentWeatherSlice.actions

export default currentWeatherSlice.reducer