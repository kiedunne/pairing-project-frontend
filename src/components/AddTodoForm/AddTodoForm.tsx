import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Button } from '../Button/Button'

interface AddTodoFormProps {
  addTodo: AddTodo
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addTodo(newTodo)
    setNewTodo('')
  }

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <Button
        text="Add Todo"
        onClick={() => handleSubmit}
        buttonType="submit"
      />
    </form>
  )
}

export { AddTodoForm }
