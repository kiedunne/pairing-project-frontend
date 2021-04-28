import { FC, useEffect } from 'react'
import { AddTodoForm } from '../AddTodoForm'
import { TodoList } from '../TodoList'
import { Header } from '../Header'
import { TodoListSectionProps } from './TodoListSectionContainer'
import './TodoListSection.css'

const TodoListSection: FC<TodoListSectionProps> = ({ onFetchTodos }) => {
  useEffect(() => {
    onFetchTodos()
  }, [onFetchTodos])
  return (
    <div className="container">
      <Header />
      <div className="content">
        <AddTodoForm />
        <TodoList />
      </div>
    </div>

  )
}

export { TodoListSection }
