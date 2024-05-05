import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = [
  { id: nanoid(), task: 'Buy groceries', status: false },
  { id: nanoid(), task: 'Finish homework assignment', status: false },
  { id: nanoid(), task: 'Call mom', status: false },
  { id: nanoid(), task: 'Schedule dentist appointment', status: false },
  { id: nanoid(), task: 'Go for a run', status: false },
  { id: nanoid(), task: 'Pay bills', status: false },
  { id: nanoid(), task: 'Read a chapter of a book', status: false },
  { id: nanoid(), task: 'Clean the house', status: false },
  { id: nanoid(), task: 'Plan weekend getaway', status: false },
  { id: nanoid(), task: 'Watch a movie', status: false },
]

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodo: (state, action) => {
      state.push(action.payload)
    },
    editTodo: (state, action) => {
      const task = state.find((task) => task.id === action.payload.id)
      if (task) {
        task.task = action.payload.task
      }
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
    markAsCompletedTodo: (state, action) => {
      const task = state.find((task) => task.id === action.payload.id)
      if (task) {
        task.status = !task.status
      }
    },
  },
})

export const { createTodo, editTodo, deleteTodo, markAsCompletedTodo } =
  todoSlice.actions

export default todoSlice.reducer
