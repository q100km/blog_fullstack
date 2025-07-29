import styled from 'styled-components'
import Logo from './logo/logo'
import ControlPanel from './control-panel/controlPanel'
import type { IStyledProps } from '../Icon/Icon'

const Discription = styled.div`
  font-style: italic;
`

const HeaderContainer = ({ className }: IStyledProps) => (
  <header className={className}>
    <Logo />
    <Discription>
      БЛА
      <br />
      БЛА
      <br />
      БЛА
      <br />
    </Discription>
    <ControlPanel />
  </header>
)

const Header = styled(HeaderContainer)`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 1000px;
  height: 120px;
  padding: 20px 40px;
  background-color: #fff;
  box-shadow: 0px -2px 17px #000;
`

export default Header
