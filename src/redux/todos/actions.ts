import { ADD_TODO, TOGGLE_TODO, FETCH_TODOS, Todo } from './types'

export const addTodo = (todo: Todo) => ({
  type: ADD_TODO,
  payload: {
    todo,
  },
})

export const toggleTodo = (id: string) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  }
})

export const fetchTodos = (todos: any) => ({
  type: FETCH_TODOS,
  payload: {
    todos,
  }
})
