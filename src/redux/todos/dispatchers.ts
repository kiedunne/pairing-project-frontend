import { DispatchFunction } from './types'
import { fetchAllTodos, toggleCompleted } from '../../api/todos'
import { addTodo, toggleTodo, fetchTodos } from './actions'
import { saveTodo } from '../../api/todos'

const doAddTodo = (text: string) => async (dispatch: DispatchFunction) => {
  try {
    const data = await saveTodo(text)
    dispatch(addTodo(data))
  }
  catch (error) {
    console.log(error)
  }
}

const doToggleTodo = (id: string) => async (dispatch: DispatchFunction) => {
  try {
    await toggleCompleted(id)
    dispatch(toggleTodo(id))
  }
  catch (error) {
    console.log(error)
  }
}

const doFetchTodods = () => async (dispatch: DispatchFunction) => {
  try {
    const data = await fetchAllTodos()
    dispatch(fetchTodos(data))
  }
  catch (error) {
    console.log(error)
  }
}

export {
  doAddTodo,
  doToggleTodo,
  doFetchTodods
}
