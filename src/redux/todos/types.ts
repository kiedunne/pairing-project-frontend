import { ThunkDispatch } from 'redux-thunk'
import { Action as ReduxAction } from 'redux'

export interface Todo {
  id: number
  text: string
  completed: boolean
}

export interface RootState {
  todos: Todo[]
}

export interface Action extends ReduxAction {
  type: string
  payload?: any
}

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const FETCH_TODOS = 'FETCH_TODOS'

export type DispatchFunction = ThunkDispatch<RootState, void, Action>
