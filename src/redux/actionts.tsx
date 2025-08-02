import { server } from '../backend for front/bff'
import type { IAuthUser } from '../types/db/dbTypes'

export const actions = {
  SET_USER: 'SET_USER',
  LOGOUT: 'LOGOUT',
} as const

export const setUser = (user: IAuthUser) => ({
  type: actions.SET_USER,
  payload: user,
})

export const logout = (session) => {
  server.logout(session)

  return {
    type: actions.LOGOUT,
  }
}
