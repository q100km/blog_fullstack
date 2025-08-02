import { ROLE } from '../../constants/role'
import { actions as a } from '../actionts'

export interface UserState {
  session: string | null
  id: number | null
  login: string | null
  roleId: number | null
}

type SetSessionType = {
  type: typeof a.SET_SESSION
  payload: string
}

type UserActions = SetSessionType

const initialUserState: UserState = {
  session: null,
  id: null,
  login: null,
  roleId: ROLE.GUEST,
}

export const userReducer = (state = initialUserState, action: any) => {
  const { type, payload } = action

  if (type === a.SET_USER) {
    return {
      ...state,
      ...payload,
    }
  }

  if (type === a.LOGOUT) return initialUserState

  // if (type === a.LOGOUT) return initialUserState
  //
  return state
}
