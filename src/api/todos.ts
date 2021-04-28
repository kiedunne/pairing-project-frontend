import axios from 'axios'

const todoHealthCheck = () => {
  axios.get('http://localhost:5000/health-check', {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }).then((response) => {
    console.log(response)
  }).catch((error) => {
    console.log(error)
  })
}

const fetchAllTodos = async () => {
  return axios.get('http://localhost:5000/all-todos', {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
  })
}

const saveTodo = async (todo: string) => {
  return axios.post('http://localhost:5000/send-todo', {
    data: {
      todo,
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
  })
}

const toggleCompleted = async (id: string) => {
  return axios.post('http://localhost:5000/toggle-completed', {
    data: {
      id,
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }).then((response) => {
    console.log(response)
  }).catch((error) => {
    console.log(error)
  })
}

export {
  todoHealthCheck,
  fetchAllTodos,
  saveTodo,
  toggleCompleted,
}