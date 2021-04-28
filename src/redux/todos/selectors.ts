import { RootState, Todo } from './types'

const getAllTodos = (state: RootState) => state.todos

const getTodoIds = (state: RootState) => {
  console.log(state.todos.length)
  state.todos.map((todo) => todo.id)
}

const getTodoById = (state: RootState, todoId: number) =>
  state.todos.find((todo: Todo) => todo.id === todoId)

export { getAllTodos, getTodoIds, getTodoById }
