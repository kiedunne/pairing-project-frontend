import { FC, useState, ChangeEvent, FormEvent } from 'react'
import { AddTodoFormDispatchProps } from './AddTodoFormContainer'
import { Button } from '../Button'
import "./AddTodoForm.css"

const AddTodoForm: FC<AddTodoFormDispatchProps> = ({ onAddTodo }) => {
  const [text, setText] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onAddTodo(text)
    setText('')
  }

  return (
    <>
      <form style={{ paddingBottom: '20px', display: 'flex' }}>
        <input
          className="enter-todo"
          type="text"
          value={text}
          onChange={handleChange}
        />
        <Button type="submit" text="Add Todo" onClick={handleSubmit} />
      </form>
    </>
  )
}

export { AddTodoForm }
