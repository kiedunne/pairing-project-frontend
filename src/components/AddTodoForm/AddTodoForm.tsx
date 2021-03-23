import { FC, useState, ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '../Button/Button'
import { ADD_TODO } from '../../redux/todos/types'

const AddTodoForm: FC = () => {
  const [text, setText] = useState<string>('')

  const dispatch = useDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const trimmedText = text.trim()
    dispatch({ type: ADD_TODO, payload: trimmedText })
    setText('')
  }
  const handleKeyDown = (e: any) => {
    const trimmedText = text.trim()
    if (e.which === 13 && trimmedText) {
      e.preventDefault()
      dispatch({ type: ADD_TODO, payload: trimmedText })
      setText('')
    }
  }

  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button text="Add Todo" onClick={handleSubmit} />
    </form>
  )
}

export { AddTodoForm }
