import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodoById } from '../../redux/todos/selectors'
import { RootState, TOGGLE_TODO } from '../../redux/todos/types'

interface Props {
  id: number
}

const TodoItem: FC<Props> = ({ id }) => {
  const dispatch = useDispatch()
  const todo = useSelector((state: RootState) => getTodoById(state, id))

  const handleToggle = () => {
    dispatch({ type: TOGGLE_TODO, payload: todo?.id })
  }

  return (
    <li>
      <label
        style={{ textDecoration: todo?.completed ? 'line-through' : undefined }}>
        <input
          onChange={handleToggle}
          type="checkbox"
          checked={todo?.completed}
        />
        {todo?.text}
      </label>
    </li>
  )
}

export { TodoItem }
