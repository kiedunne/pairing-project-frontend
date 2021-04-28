import { FC } from 'react'
import { Todo } from '../../redux/todos/types'
import './TodoItem.css'
import { TodoItemDispatchProps } from './TodoItemContainer'

interface TodoItemProps extends TodoItemDispatchProps {
  todo: Todo
}

const TodoItem: FC<TodoItemProps> = ({ todo, onToggleTodo }) => {
  const { id, text, completed } = todo

  const handleToggle = () => {
    onToggleTodo(id)
  }

  return (
    <li className="todo-list-item">
      <label
        style={{ textDecoration: completed ? 'line-through' : undefined }}>
        <input
          onChange={handleToggle}
          type="checkbox"
          checked={completed}
        />
        {text}
      </label>
    </li>
  )
}

export { TodoItem }
