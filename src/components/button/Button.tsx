import styled from 'styled-components'

import type { ButtonHTMLAttributes } from 'react'

interface IStyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string
  margin?: string
  width?: string
}

const ButtonContainer = ({ className, children, width, ...props }: IStyledButtonProps) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}

const Button = styled(ButtonContainer)`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  width: ${({ width = '100%' }) => width};
  height: 32px;
  cursor: pointer;
  border: 1px solid rgb(0, 0, 0);
  background-color: rgb(238, 238, 238);
  border-radius: 5px;
`

export default Button
