import { FC } from 'react'
import { todoHealthCheck } from '../../api/todos'
import { Button } from '../Button'
import './Header.css'

const Header: FC = () => {
  return (
    <div className="header">
      <h1>Todo List</h1>
      <Button primary onClick={() => todoHealthCheck()} text="Click me to start the health check!" />
    </div>
  )
}

export { Header }
