import type { IUser } from '../types/db/dbTypes'
import { getUsers } from './getUsers'

export const getUser = async (loginToFind: string): Promise<IUser | null> => {
  const users = await getUsers()
  const user = users.find(({ login }) => login === loginToFind)

  if (!user) {
    return null
  }

  return user
}
