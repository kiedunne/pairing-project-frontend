import { combineReducers } from 'redux'
import { todosReducer } from './todos/reducer'

const rootReducer = combineReducers({
  todos: todosReducer
})

export default rootReducer
