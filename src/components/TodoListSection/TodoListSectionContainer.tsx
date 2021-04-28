import { connect } from 'react-redux'
import { DispatchFunction } from '../../redux/todos/types'
import { doFetchTodods } from '../../redux/todos/dispatchers'
import { TodoListSection } from './TodoListSection'

export interface TodoListSectionProps {
  onFetchTodos: () => void
}

const mapDispatchToProps = (
  dispatch: DispatchFunction
): TodoListSectionProps => {
  return {
    onFetchTodos: (): void => {
      dispatch(doFetchTodods())
    },
  }
}

export const TodoListSectionContainer: any = connect(
  null,
  mapDispatchToProps
)(TodoListSection)
