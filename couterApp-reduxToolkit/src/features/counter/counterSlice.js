import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value++
    },
    decrement: (state) => {
      state.value--
    },
    addByAmount: (state, action) => {
      state.value += Number(action.payload.value)
    },
  },
})

export const { increment, decrement, addByAmount } = counterSlice.actions
export default counterSlice.reducer
