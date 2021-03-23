import { ADD_TODO, TOGGLE_TODO } from './types'

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    text,
  },
})

export const toggleTodo = (id: string) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  }
})
