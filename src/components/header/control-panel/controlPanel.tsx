import styled from 'styled-components'
import { Icon, type IStyledProps } from '../../Icon/Icon'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../../button/button'
import { ROLE } from '../../../constants/role'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { selectUserLogin, selectUserRole, selectUserSession } from '../../../redux/selectors'
import { server } from '../../../backend for front/bff'
import { actions as a, logout } from '../../../redux/actionts'

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const UserName = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`

const LogOutIcon = styled.div`
  cursor: pointer;
`

const ControlPanelContainer = ({ className }: IStyledProps) => {
  const navigate = useNavigate()
  const roleId = useAppSelector(selectUserRole)
  const login = useAppSelector(selectUserLogin)
  const session = useAppSelector(selectUserSession)
  const dispatch = useAppDispatch()

  return (
    <div className={className}>
      <RightAligned>
        {roleId === ROLE.GUEST ? (
          <NavLink to='/login'>
            <Button>Войти</Button>
          </NavLink>
        ) : (
          <>
            <UserName>{login}</UserName>
            <LogOutIcon>
              <Icon
                id='fa-sign-out'
                margin='0 0 0 10px'
                onClick={() => dispatch(logout(session))}
              />
            </LogOutIcon>
          </>
        )}
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
