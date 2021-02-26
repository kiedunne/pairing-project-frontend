import React, { FC } from 'react'
import { TodoItem } from '../TodoItem/TodoItem'

interface Props {
  todos: Todo[]
  toggleTodo: ToggleTodo
}

const TodoList: FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} toggleTodo={toggleTodo} key={todo.text} />
      ))}
    </ul>
  )
}

export { TodoList }
