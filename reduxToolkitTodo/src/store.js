import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../src/features/todoSlice'

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
})

export default store
