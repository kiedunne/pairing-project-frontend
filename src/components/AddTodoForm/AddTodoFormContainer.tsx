import { connect } from 'react-redux'
import { DispatchFunction } from '../../redux/todos/types'
import { doAddTodo } from '../../redux/todos/dispatchers'
import { AddTodoForm } from './AddTodoForm'

export interface AddTodoFormDispatchProps {
  onAddTodo: (text: string) => void
}

const mapDispatchToProps = (
  dispatch: DispatchFunction
): AddTodoFormDispatchProps => {
  return {
    onAddTodo: (text: string): void => {
      dispatch(doAddTodo(text))
    },
  }
}

export const AddTodoFormContainer = connect(
  null,
  mapDispatchToProps
)(AddTodoForm)
