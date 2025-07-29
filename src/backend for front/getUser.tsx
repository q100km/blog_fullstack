import type { IUser } from '../types/db/dbTypes'
import { getUsers } from './getUsers'

export const getUser = async (loginToFind: string): Promise<IUser> => {
  const users = await getUsers()
  const user = users.find(({ login }) => login === loginToFind)

  if (!user) {
    throw new Error('User not found')
  }

  return user
}
