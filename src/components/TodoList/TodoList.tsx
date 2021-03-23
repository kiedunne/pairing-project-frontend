import { FC } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { TodoItem } from '../TodoItem/TodoItem'
import { getTodoIds } from '../../redux/todos/selectors'

const TodoList: FC = () => {
  const todoIds = useSelector(getTodoIds, shallowEqual)
  return (
    <ul>
      {todoIds.map((todoId: any) => (
        <TodoItem key={todoId} id={todoId} />
      ))}
    </ul>
  )
}

export { TodoList }
