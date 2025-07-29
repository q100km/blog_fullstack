import { ROLE } from '../constants/role'
import { removeComment } from './session methods/sessionMethods'

export interface ISession {
  logOut: () => void
  removeComment?: () => void
}

//														Методы для ролей
export const createSession = (roleId: number) => {
  const session: ISession = {
    logOut() {
      Object.keys(session).forEach((key) => delete (session as unknown)[key])
    },
  }

  if (roleId === ROLE.ADMIN) {
    session.removeComment = removeComment
  }

  if (roleId === ROLE.MODERATOR) {
    session.removeComment = removeComment
  }

  if (roleId === ROLE.READER) {
    //
  }

  return session
}
