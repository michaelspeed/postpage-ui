import React from 'react'
import './button.css'
import { ButtonProps } from './ButtonProps'

export const Button: React.FC<ButtonProps> = ({
  intent,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  return (
    <button type="button" style={{ backgroundColor }} {...props}>
      {label}
    </button>
  )
}
