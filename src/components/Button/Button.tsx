import React, { FC, FormEvent } from 'react'

interface ButtonProps {
  text: string
  onClick: (e: FormEvent<HTMLButtonElement>) => void
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px',
        border: 'none',
        borderRadius: '6px',
        backgroundColor: 'cornflowerblue',
        fontWeight: 'bold',
        color: 'white',
        cursor: 'pointer',
        fontSize: '10px'
      }}>
      {' '}
      {text}
    </button>
  )
}

export { Button }
