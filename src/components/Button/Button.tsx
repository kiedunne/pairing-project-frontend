import { FC, FormEvent } from 'react'
import './Button.css'
interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  text: string
  primary?: boolean
  onClick: (e: FormEvent<HTMLButtonElement>) => void
}

const Button: FC<ButtonProps> = ({ type, text, onClick, primary }) => {
  return (
    <button
      onClick={onClick}
      className="button"
      type={type || 'button'}
    >
      {' '}
      {text}
    </button>
  )
}

export { Button }
