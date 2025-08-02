import type { ReactNode } from 'react'
import styled from 'styled-components'

export interface IStyledProps {
  className?: string
  id?: string
  size?: string
  margin?: string
  children?: ReactNode
  width?: string
  onClick?: () => void
}

const IconContainer = ({ className, id, ...props }: IStyledProps) => (
  <div className={className} {...props}>
    <i className={`fa ${id}`} aria-hidden='true'></i>
  </div>
)

export const Icon = styled(IconContainer)<IStyledProps>`
  font-size: ${({ size = '24px' }) => size};
  margin: ${({ margin = '0' }) => margin};
`
