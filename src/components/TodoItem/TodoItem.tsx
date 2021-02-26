import React from 'react'

interface Props {
  todo: Todo
  toggleTodo: ToggleTodo
}

const TodoItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
        <input
          onChange={() => toggleTodo(todo)}
          type="checkbox"
          checked={todo.complete}
        />
        {todo.text}
      </label>
    </li>
  )
}

export { TodoItem }
