import { ROLE } from '../constants/role'
import { logout } from '../redux/actionts'
import { addUser } from './addUser'
import { addSession } from './createSession'
import { getUser } from './getUser'
import { sessions } from './sessions'

export const server = {
  //                      авторизация
  async authorize(authLogin: string, authPassword: string) {
    const user = await getUser(authLogin)

    if (!user) return { error: ': Пользователь не найден', res: null }

    if (authPassword !== user.password) return { error: 'неверный пароль', res: null }

    return {
      error: null,
      res: {
        id: user.id,
        login: user.login,
        roleId: user.role_id,
        session: sessions.create(user),
      },
    }
  },

  //                        регистрация
  async register(regLogin: string, regPassword: string) {
    const user = await getUser(regLogin)

    if (user) return { error: 'Такой логин занят', res: null }

    const newUser = await addUser(regLogin, regPassword)

    return {
      error: null,
      res: {
        id: newUser.id,
        login: newUser.login,
        roleId: newUser.role_id,
        session: sessions.create(newUser),
      },
    }
    //
  },
  //                        logout
  async logout(session) {
    sessions.remove(session)
  },
}
