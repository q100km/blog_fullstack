import styled from 'styled-components'
import { forwardRef, type InputHTMLAttributes } from 'react'

interface IStyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const InputContainer = forwardRef<HTMLInputElement, IStyledInputProps>(
  ({ className, width, ...props }, ref) => {
    return <input className={className} {...props} ref={ref} />
  }
)

const Input = styled(InputContainer)`
  width: ${({ width = '100%' }) => width};
  height: 40px;
  margin: 0 0 10px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #000;
  border-radius: 5px;
`

export default Input
