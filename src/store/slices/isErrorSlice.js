import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const isErrorSlice = createSlice({
  name: 'isError',
  initialState,
  reducers: {
    setTrue: (state) => {
      state.value = true
    },
    setFalse: (state) => {
      state.value = false
    },
  },
})

export const { setTrue, setFalse } = isErrorSlice.actions

export default isErrorSlice.reducer