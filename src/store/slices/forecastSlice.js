import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {},
}

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
    reducers: {
      setForecast: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value = action.payload
      },
    resetForecast: (state) => {
      state.value = {}
    },
  },
})

// Action creators are generated for each case reducer function
export const { setForecast, resetForecast } = forecastSlice.actions

export default forecastSlice.reducer