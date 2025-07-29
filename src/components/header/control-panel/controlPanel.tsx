import styled from 'styled-components'
import { Icon, type IStyledProps } from '../../Icon/Icon'
import { NavLink, useNavigate } from 'react-router-dom'

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Button = styled.button`
  font-size: 18px;
  width: 100px;
  height: 32px;
  cursor: pointer;
`

const ControlPanelContainer = ({ className }: IStyledProps) => {
  const navigate = useNavigate()

  return (
    <div className={className}>
      <RightAligned>
        <NavLink to='/login'>
          <Button>Войти</Button>
        </NavLink>
      </RightAligned>

      <RightAligned>
        <a onClick={() => navigate(-1)}>
          <Icon id='fa-backward' margin='10px 0 0 0' />
        </a>

        <NavLink to='/post'>
          <Icon id='fa-file-text-o' margin='10px 0 0 16px' />
        </NavLink>

        <NavLink to='/users'>
          <Icon id='fa-users' margin='10px 0 0 16px' />
        </NavLink>
      </RightAligned>
    </div>
  )
}

const ControlPanel = styled(ControlPanelContainer)`
  //
`

export default ControlPanel
