import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const isErrorSlice = createSlice({
  name: 'isError',
  initialState,
  reducers: {
    setErrorStatusTrue: (state) => {
      state.value = true
    },

    setErrorStatusFalse: (state) => {
      state.value = false
    },
  },
})

export const { setErrorStatusTrue, setErrorStatusFalse } = isErrorSlice.actions

export default isErrorSlice.reducer