import { TodoList } from './components/TodoList/TodoList'
import { AddTodoForm } from './components/AddTodoForm'
import { Button } from './components/Button/Button'
import axios from 'axios'

function App() {
  const fetchHealthCheck = () => {
    axios.get('http://localhost:8080/health-check', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <div className="App">
      <Button onClick={() => fetchHealthCheck()} text="Click me to start the health check!" />
      <TodoList />
      <AddTodoForm />
    </div>
  )
}

export default App
