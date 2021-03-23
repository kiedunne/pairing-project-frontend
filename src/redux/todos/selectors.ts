import { RootState, Todo } from './types'

const getTodoIds = (state: RootState) => state.todos.map((todo) => todo.id)

const getTodoById = (state: RootState, todoId: number) =>
  state.todos.find((todo: Todo) => todo.id === todoId)

export { getTodoIds, getTodoById }
