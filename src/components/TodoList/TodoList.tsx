import { FC } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { TodoItem } from '../TodoItem'
import { getAllTodos } from '../../redux/todos/selectors'
import './TodoList.css'

const TodoList: FC = () => {
  const todos = useSelector(getAllTodos, shallowEqual)

  return (
    <ul className="todo-list">
      {todos.map((todo: any) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export { TodoList }
