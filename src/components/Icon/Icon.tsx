import styled from 'styled-components'

export interface IStyledProps {
  className?: string
  id?: string
  size?: string
  margin?: string
}

const IconContainer = ({ className, id }: IStyledProps) => (
  <div className={className}>
    <i className={`fa ${id}`} aria-hidden='true'></i>
  </div>
)

export const Icon = styled(IconContainer)<IStyledProps>`
  font-size: ${({ size = '24px' }) => size};
  margin: ${({ margin = '0' }) => margin};
`
