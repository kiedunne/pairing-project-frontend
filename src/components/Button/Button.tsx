import React, { FC } from 'react'

interface ButtonProps {
  text: string
  buttonType?: any
  onClick: () => void
}

const Button: FC<ButtonProps> = ({ text, buttonType, onClick }) => {
  return (
    <button
      type={buttonType}
      onClick={onClick}
      style={{
        padding: '12px',
        border: 'none',
        borderRadius: '6px',
        backgroundColor: 'cornflowerblue',
        fontWeight: 'bold',
        color: 'white',
        cursor: 'pointer'
      }}>
      {' '}
      {text}
    </button>
  )
}

export { Button }
