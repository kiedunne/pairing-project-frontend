import { ADD_TODO, TOGGLE_TODO, FETCH_TODOS } from './types'

const initialState: any[] = []

const todosReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        action.payload.todo
      ]
    }
    case TOGGLE_TODO: {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed
        }
      })
    }
    case FETCH_TODOS: {
      return action.payload.todos
    }
    default:
      return state
  }
}

export { todosReducer }
