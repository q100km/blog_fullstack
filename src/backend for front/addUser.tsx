import { ROLE } from '../constants/role'
import type { IUser } from '../types/db/dbTypes'
import { URL_Users } from './constantsURL'
import { generateDate } from './utils'

export const addUser = async (regLogin: string, regPassword: string): Promise<IUser> => {
  const newUser: IUser = {
    login: regLogin,
    password: regPassword,
    registred_at: generateDate(),
    role_id: ROLE.READER,
  }

  const response = await fetch(URL_Users, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },

    // body: JSON.stringify({
    //   newUser,
    // }),
    // БЫЛ ВЛОЖЕННЫЙ ОБЬЕКТ {newUser} исправил на обычный newUser

    body: JSON.stringify(newUser),
  })

  return response.json()
}
