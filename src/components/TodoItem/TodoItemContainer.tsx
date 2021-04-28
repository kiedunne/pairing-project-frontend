import { connect } from 'react-redux'
import { DispatchFunction } from '../../redux/todos/types'
import { doToggleTodo } from '../../redux/todos/dispatchers'
import { TodoItem } from './TodoItem'
import { ChangeEventHandler } from 'react'

export interface TodoItemDispatchProps {
  onToggleTodo: (id: any) => ChangeEventHandler<HTMLInputElement>
}

const mapDispatchToProps = (dispatch: DispatchFunction): TodoItemDispatchProps => {
  return {
    onToggleTodo: (id: any): any => {
      dispatch(doToggleTodo(id))
    }
  }
}

export const TodoItemContainer = connect(
  null,
  mapDispatchToProps
)(TodoItem)
