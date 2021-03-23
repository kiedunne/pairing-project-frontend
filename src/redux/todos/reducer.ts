import { ADD_TODO, TOGGLE_TODO } from './types'

const initialState: any[] = [
  { id: 1, text: 'Config redux store', complete: true },
  { id: 2, text: 'Split into modules', complete: false },
  { id: 3, text: 'Set up endpoints', complete: false },
]

const nextTodoId = (todos: any): number => {
  const maxId = todos.reduce(
    (maxId: any, todo: any) => Math.max(todo.id, maxId),
    -1
  )
  return maxId + 1
}

const todosReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
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
    default:
      return state
  }
}

export { todosReducer }
