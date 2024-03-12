import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
}

export const isWideScreenSlice = createSlice({
  name: 'isWideScreenSlice',
  initialState,
    reducers: {
      setIsWideScreen: (state, action) => {
        state.value = action.payload
      },
  },
})

export const { setIsWideScreen } = isWideScreenSlice.actions

export default isWideScreenSlice.reducer