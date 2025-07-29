import { addUser } from './addUser'
import { createSession } from './createSession'
import { getUser } from './getUser'

// 9. Первичная реализация BFF. Рефакторинг. Сессии
//  рефактор дублирования функций вынести в другие файлы

export const server = {
  //                      авторизация
  async authorize(authLogin: string, authPassword: string) {
    const user = await getUser(authLogin)

    if (!user) return { error: 'юзер не найден', res: null }

    if (authPassword !== user.password) return { error: 'неверный пароль', res: null }

    return {
      error: null,
      res: createSession(user.role_id),
    }
  },

  //                        регистрация
  async register(regLogin: string, regPassword: string) {
    const user = await getUser(regLogin)

    if (user) return { error: 'Такой логин занят', res: null }

    const newUser = await addUser(regLogin, regPassword)

    return {
      error: null,
      res: createSession(newUser.role_id),
    }
    //
  },
}
