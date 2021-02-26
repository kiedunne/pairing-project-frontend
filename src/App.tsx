import React, { useState } from 'react'
import { TodoList } from './components/TodoList/TodoList'
import { AddTodoForm } from './components/AddTodoForm/AddTodoForm'
import { Button } from './components/Button/Button'
function App() {
  const initTodos: Todo[] = [
    { text: 'learn react', complete: true },
    { text: 'learn typescript', complete: false },
    { text: 'learn java', complete: false },
  ]

  const [todos, setTodos] = useState<Array<Todo>>(initTodos)

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const addTodos: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  const fetchHealthCheck = () => {
    console.log('fetching..')
  }
  return (
    <div className="App">
      <Button onClick={() => fetchHealthCheck()} text="Click me to start the health check!" />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodos} />
    </div>
  )
}

export default App
