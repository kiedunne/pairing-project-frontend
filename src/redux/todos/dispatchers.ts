import { DispatchFunction } from './types'
import { addTodo, toggleTodo } from './actions'

const doAddTodo = (text: string) => (dispatch: DispatchFunction) => {
  dispatch(addTodo(text))
}

const doToggleTodo = (id: string) => (dispatch: DispatchFunction) => {
  dispatch(toggleTodo(id))
}
export {
  doAddTodo,
  doToggleTodo
}
