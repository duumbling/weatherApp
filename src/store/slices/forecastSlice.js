import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {},
}

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
    reducers: {
      setForecast: (state, action) => {
        state.value = action.payload
      },
    resetForecast: (state) => {
      state.value = {}
    },
  },
})

export const { setForecast, resetForecast } = forecastSlice.actions

export default forecastSlice.reducer