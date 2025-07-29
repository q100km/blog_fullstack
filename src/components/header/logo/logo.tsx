import styled from 'styled-components'
import { Icon, type IStyledProps } from '../../Icon/Icon'
import { Link } from 'react-router-dom'

const LargeText = styled.div`
  font-size: 48px;
  font-weight: 600;
  line-height: 48px;
  margin-top: 17px;
`

const SmallText = styled.div`
  font-size: 18px;
  font-weight: bold;
`

const LogoContainer = ({ className }: IStyledProps) => {
  return (
    <Link className={className} to='/'>
      <Icon id='fa-code' size='70px' margin='0 10px 0 0' />

      <div>
        <LargeText>Blog</LargeText>
        <SmallText>Разработчика</SmallText>
      </div>
    </Link>
  )
}

const Logo = styled(LogoContainer)`
  display: flex;
  margin-top: -21px;
`

export default Logo
